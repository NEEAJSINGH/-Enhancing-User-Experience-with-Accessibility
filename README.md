# Week 3 Task - Enhancing User Experience with Accessibility

## Project

Accessible Technology Information Portal

## Overview

This project reworks a typical blog/information portal with accessibility
and user-experience improvements. It uses semantic HTML, ARIA attributes
where appropriate, keyboard navigation, visible focus states, responsive
design, and documented accessibility practices.

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript

No external framework or library is required.

## Files

```text
week3-accessible-blog-portal/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Accessibility Audit Approach

The interface was reviewed against common WCAG 2.x accessibility principles
and practical checks that can be performed with tools such as:

- Chrome Lighthouse Accessibility audit
- WAVE browser extension
- Keyboard-only testing
- Manual focus and heading-structure review
- Responsive/mobile testing

Note: Automated tools can identify many common issues, but they cannot prove
full accessibility. Manual testing is also required.

## Improvements Implemented

### 1. Semantic HTML

The page uses:

- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<article>`
- `<aside>`
- `<footer>`
- Proper heading hierarchy

This gives assistive technologies meaningful page landmarks and structure.

### 2. Skip Navigation

A "Skip to main content" link is provided so keyboard users can bypass
repeated navigation.

### 3. Keyboard Navigation

All interactive controls use native links or buttons.

The mobile navigation supports:

- Tab navigation
- Enter/Space activation of the menu button
- Escape to close the menu
- Visible keyboard focus

### 4. ARIA

ARIA is used only where it adds information to dynamic controls.

The navigation button uses:

- `aria-expanded`
- `aria-controls`
- An accessible label

The list of accessibility features uses a labeled list structure.

Article links also have descriptive accessible names.

### 5. Focus Visibility

A clear `:focus-visible` style is applied to interactive elements so
keyboard users can see where focus currently is.

### 6. Contrast and Readability

The design uses dark text on light backgrounds and strong link/button
contrast. Borders and spacing also help separate content visually.

Actual contrast should still be verified with a contrast checker during
deployment because final accessibility depends on the exact rendering,
browser, and user settings.

### 7. Responsive Design

The layout adapts to desktop, tablet, and mobile screen sizes.

On smaller screens:

- The navigation becomes a menu button.
- Cards become a single-column layout.
- Content spacing is adjusted.
- Touch targets remain usable.

### 8. Reduced Motion

The CSS respects `prefers-reduced-motion: reduce` by disabling smooth
scroll behavior for users who request reduced motion.

### 9. Descriptive Links

Links use meaningful text rather than generic labels such as "Click here".
Where repeated article links could otherwise be ambiguous, an `aria-label`
provides the article name.

### 10. Error Handling

JavaScript checks that required mobile navigation elements exist. If they
are missing, the script logs a warning and stops instead of throwing an
unexpected error.

## How to Test

### Keyboard Test

1. Open `index.html`.
2. Use Tab to move through the page.
3. Confirm that every interactive element receives visible focus.
4. Use Enter or Space on the mobile menu button.
5. Use Arrow/Tab navigation to move through links.
6. Press Escape while the mobile menu is open.
7. Confirm that focus returns to the menu button.

### Screen Reader / Semantic Test

Inspect the page with a screen reader or browser accessibility tree and
confirm that the header, navigation, main content, sections, articles,
aside, and footer are exposed as meaningful landmarks.

### Lighthouse

1. Open the page in Google Chrome.
2. Open DevTools.
3. Select the Lighthouse panel.
4. Run an Accessibility audit.
5. Review any reported issues.
6. Fix application-specific issues before deployment.

### WAVE

1. Install or open the WAVE accessibility evaluation tool.
2. Load the project page.
3. Review errors, alerts, contrast issues, landmarks, and structural
   information.
4. Manually verify the findings.

## Standards / Principles Addressed

The implementation is designed around WCAG principles:

- Perceivable: readable content, meaningful structure, contrast-conscious UI.
- Operable: keyboard access, focus visibility, skip link, usable controls.
- Understandable: predictable navigation and clear labels.
- Robust: semantic HTML and appropriate ARIA for dynamic behavior.

This project is an educational implementation and should still undergo
real-world accessibility testing before production use.

## Assignment Requirements Checklist

| Requirement | Status |
|---|---|
| Choose information portal concept | Completed |
| Accessibility audit approach | Documented |
| Semantic HTML | Implemented |
| ARIA attributes | Implemented |
| Keyboard navigation | Implemented |
| Focus states | Implemented |
| Responsive design | Implemented |
| Contrast-conscious styling | Implemented |
| Clear interactive labels | Implemented |
| Accessibility documentation | Included |
| HTML/CSS/JavaScript files | Included |
| README report | Included |
