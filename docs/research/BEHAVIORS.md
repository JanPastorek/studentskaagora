# Behaviors — studentska-agora.webflow.io

## Scroll sweep
- No header transformation; no sticky nav (there is no nav at all)
- No scroll-driven animations or progress indicators observed
- No scroll-snap; native browser scrolling
- No smooth-scroll library (no `.lenis` / `.locomotive-scroll`)

## Click sweep
- Single interactive element on the page besides the form: "prihlás sa" hero button → anchor jump to `#prihlasit-sa` (the application form section)
- No tabs/pills, no modals, no dropdowns
- Google Form (embedded iframe) handles its own interactions

## Hover sweep
- "prihlás sa" button: subtle bg-color change on hover (Webflow default)
- Email link `andrej.snahnican@studentskaagora.sk`: underline on hover

## Responsive sweep
- Mobile breakpoint kicks in below ~768px (Webflow default)
- 3-card section stacks to 1 column on mobile
- 2-col topics list becomes 1 column
- People grid becomes 2 columns then 1
- Hero H1 font-size scales down
- Why-apply image moves above text on mobile
