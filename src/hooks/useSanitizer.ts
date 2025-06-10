/**
 * useSanitizer
 * 
 * HTML 콘텐츠를 안전하게 정제하는 커스텀 훅
 * XSS 공격을 방지하기 위해 허용된 태그와 속성만 필터링합니다.
 * 
 * A custom hook for safely sanitizing HTML content
 * Filters only allowed tags and attributes to prevent XSS attacks.
 */
import { useCallback } from 'react';

interface SanitizeOptions {
  allowedTags?: string[];
  allowedAttributes?: Record<string, string[]>;
  allowedSchemes?: string[];
}

function useSanitizer(options: SanitizeOptions = {}) {
  const {
    allowedTags = ['p', 'b', 'i', 'em', 'strong', 'a'],
    allowedAttributes = {
      a: ['href', 'target', 'rel'],
      '*': ['class']
    },
    allowedSchemes = ['http', 'https', 'mailto', 'tel']
  } = options;

  const sanitize = useCallback((html: string): string => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    const sanitizeNode = (node: Node): Node | null => {
      if (node.nodeType === Node.TEXT_NODE) {
        return node;
      }

      if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node as Element;
        const tagName = element.tagName.toLowerCase();

        if (!allowedTags.includes(tagName)) {
          return null;
        }

        const newElement = document.createElement(tagName);
        const allowedAttrs = allowedAttributes[tagName] || allowedAttributes['*'] || [];

        for (const attr of allowedAttrs) {
          const value = element.getAttribute(attr);
          if (value) {
            if (attr === 'href' || attr === 'src') {
              try {
                const url = new URL(value);
                if (allowedSchemes.includes(url.protocol.replace(':', ''))) {
                  newElement.setAttribute(attr, value);
                }
              } catch {
                // Invalid URL, skip this attribute
              }
            } else {
              newElement.setAttribute(attr, value);
            }
          }
        }

        for (const child of Array.from(element.childNodes)) {
          const sanitizedChild = sanitizeNode(child);
          if (sanitizedChild) {
            newElement.appendChild(sanitizedChild);
          }
        }

        return newElement;
      }

      return null;
    };

    const sanitizedDoc = document.createElement('div');
    for (const child of Array.from(doc.body.childNodes)) {
      const sanitizedChild = sanitizeNode(child);
      if (sanitizedChild) {
        sanitizedDoc.appendChild(sanitizedChild);
      }
    }

    return sanitizedDoc.innerHTML;
  }, [allowedTags, allowedAttributes, allowedSchemes]);

  return sanitize;
}

export default useSanitizer; 