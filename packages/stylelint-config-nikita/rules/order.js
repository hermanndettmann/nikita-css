module.exports = {
    rules: {
        "order/order": [
            "dollar-variables",
            "custom-properties",
            "at-rules",
            "declarations",
            {
                type: "at-rule",
                name: "include",
                hasBlock: true,
            },
            "rules",
        ],
        "order/properties-order": [[
            "all",
            "content",
            "overflow",
            "overflow-x",
            "overflow-y",
            "overflow-style",
            "opacity",
            "zoom",
            "max-zoom",
            "min-zoom",
            "user-zoom",
            "orientation",
            "direction",
            "unicode-bidi",
            "break-before",
            "break-inside",
            "break-after",
            "columns",
            "column-span",
            "column-width",
            "column-count",
            "column-fill",
            "column-gap",
            "column-rule",
            "column-rule-width",
            "column-rule-style",
            "column-rule-color",
            "flex-direction",
            "flex-order",
            "flex-pack",
            "flex-align",
            "box-sizing",
            "appearance",
            "user-select",
            "position",
            "top",
            "right",
            "bottom",
            "left",
            "z-index",
            "visibility",
            "float",
            "display",
            "clear",
            "table-layout",
            "caption-side",
            "empty-cells",
            "width",
            "height",
            "min-width",
            "min-height",
            "max-width",
            "max-height",
            "outline",
            "outline-width",
            "outline-style",
            "outline-color",
            "outline-offset",
            "margin",
            "margin-top",
            "margin-right",
            "margin-bottom",
            "margin-left",
            "box-shadow",
            "border",
            "border-spacing",
            "border-collapse",
            "border-width",
            "border-style",
            "border-color",
            "border-top",
            "border-right",
            "border-bottom",
            "border-left",
            "border-radius",
            "border-image",
            "border-image-source",
            "border-image-slice",
            "border-image-width",
            "border-image-outset",
            "border-image-repeat",
            "border-top-image",
            "border-right-image",
            "border-bottom-image",
            "border-left-image",
            "border-corner-image",
            "border-top-left-image",
            "border-top-right-image",
            "border-bottom-right-image",
            "border-bottom-left-image",
            "padding",
            "padding-top",
            "padding-right",
            "padding-bottom",
            "padding-left",
            "clip",
            "list-style",
            "list-style-position",
            "list-style-type",
            "list-style-image",
            "font",
            "font-family",
            "src",
            "font-size",
            "font-weight",
            "font-style",
            "font-variant",
            "font-size-adjust",
            "font-stretch",
            "line-height",
            "orphans",
            "widows",
            "text-align",
            "text-align-last",
            "text-decoration",
            "text-emphasis",
            "text-emphasis-position",
            "text-emphasis-style",
            "text-emphasis-color",
            "text-indent",
            "text-justify",
            "text-outline",
            "text-transform",
            "text-wrap",
            "text-shadow",
            "text-overflow",
            "text-overflow-ellipsis",
            "text-overflow-mode",
            "text-rendering",
            "text-size-adjust",
            "white-space",
            "word-spacing",
            "word-break",
            "word-wrap",
            "tab-size",
            "hyphens",
            "letter-spacing",
            "vertical-align",
            "color",
            "background",
            "background-color",
            "background-image",
            "background-attachment",
            "background-position",
            "background-position-x",
            "background-position-y",
            "background-clip",
            "background-origin",
            "background-size",
            "background-repeat",
            "resize",
            "cursor",
            "pointer-events",
            "touch-action",
            "tap-highlight-color",
            "quotes",
            "counter-increment",
            "counter-reset",
            "-ms-writing-mode",
            "-ms-interpolation-mode",
            "filter",
            "nav-index",
            "nav-up",
            "nav-right",
            "nav-down",
            "nav-left",
            "nav-context",
            "page-break-before",
            "page-break-inside",
            "page-break-after",
            "box-decoration-break",
            "transition",
            "backface-visibility",
            "perspective",
            "transform",
            "animation",
        ], {
            unspecified: "bottomAlphabetical"
        }],
    },
};
