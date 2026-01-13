(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Projects/MAN_MVP/frontend/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/MAN_MVP/frontend/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Projects/MAN_MVP/frontend/src/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/MAN_MVP/frontend/src/components/ui/slider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Slider",
    ()=>Slider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/@radix-ui/react-slider/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Slider({ className, defaultValue, value, min = 0, max = 100, ...props }) {
    _s();
    const _values = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Slider.useMemo[_values]": ()=>Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [
                min,
                max
            ]
    }["Slider.useMemo[_values]"], [
        value,
        defaultValue,
        min,
        max
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "slider",
        defaultValue: defaultValue,
        value: value,
        min: min,
        max: max,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"], {
                "data-slot": "slider-track",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"], {
                    "data-slot": "slider-range",
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full")
                }, void 0, false, {
                    fileName: "[project]/Projects/MAN_MVP/frontend/src/components/ui/slider.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Projects/MAN_MVP/frontend/src/components/ui/slider.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            Array.from({
                length: _values.length
            }, (_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Thumb"], {
                    "data-slot": "slider-thumb",
                    className: "border-primary ring-ring/50 block size-4 shrink-0 rounded-full border bg-white shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
                }, index, false, {
                    fileName: "[project]/Projects/MAN_MVP/frontend/src/components/ui/slider.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/MAN_MVP/frontend/src/components/ui/slider.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(Slider, "g0y/PG/feYg861SE8jxuAUMRVc0=");
_c = Slider;
;
var _c;
__turbopack_context__.k.register(_c, "Slider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/MAN_MVP/frontend/src/components/ui/switch.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Switch",
    ()=>Switch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/@radix-ui/react-switch/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Switch({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "switch",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Thumb"], {
            "data-slot": "switch-thumb",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0")
        }, void 0, false, {
            fileName: "[project]/Projects/MAN_MVP/frontend/src/components/ui/switch.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Projects/MAN_MVP/frontend/src/components/ui/switch.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Switch;
;
var _c;
__turbopack_context__.k.register(_c, "Switch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/MAN_MVP/frontend/src/components/ui/tabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tabs",
    ()=>Tabs,
    "TabsContent",
    ()=>TabsContent,
    "TabsList",
    ()=>TabsList,
    "TabsTrigger",
    ()=>TabsTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Tabs({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "tabs",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Projects/MAN_MVP/frontend/src/components/ui/tabs.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Tabs;
function TabsList({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
        "data-slot": "tabs-list",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Projects/MAN_MVP/frontend/src/components/ui/tabs.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c1 = TabsList;
function TabsTrigger({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "tabs-trigger",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Projects/MAN_MVP/frontend/src/components/ui/tabs.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c2 = TabsTrigger;
function TabsContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        "data-slot": "tabs-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 outline-none", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Projects/MAN_MVP/frontend/src/components/ui/tabs.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c3 = TabsContent;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Tabs");
__turbopack_context__.k.register(_c1, "TabsList");
__turbopack_context__.k.register(_c2, "TabsTrigger");
__turbopack_context__.k.register(_c3, "TabsContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/MAN_MVP/frontend/src/components/ui/scroll-area.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollArea",
    ()=>ScrollArea,
    "ScrollBar",
    ()=>ScrollBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function ScrollArea({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "scroll-area",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                "data-slot": "scroll-area-viewport",
                className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
                children: children
            }, void 0, false, {
                fileName: "[project]/Projects/MAN_MVP/frontend/src/components/ui/scroll-area.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollBar, {}, void 0, false, {
                fileName: "[project]/Projects/MAN_MVP/frontend/src/components/ui/scroll-area.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Corner"], {}, void 0, false, {
                fileName: "[project]/Projects/MAN_MVP/frontend/src/components/ui/scroll-area.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/MAN_MVP/frontend/src/components/ui/scroll-area.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = ScrollArea;
function ScrollBar({ className, orientation = "vertical", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"], {
        "data-slot": "scroll-area-scrollbar",
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex touch-none p-px transition-colors select-none", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaThumb"], {
            "data-slot": "scroll-area-thumb",
            className: "bg-border relative flex-1 rounded-full"
        }, void 0, false, {
            fileName: "[project]/Projects/MAN_MVP/frontend/src/components/ui/scroll-area.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Projects/MAN_MVP/frontend/src/components/ui/scroll-area.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c1 = ScrollBar;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "ScrollArea");
__turbopack_context__.k.register(_c1, "ScrollBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/MAN_MVP/frontend/src/components/constants/uicolors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACCENT_COLORS",
    ()=>ACCENT_COLORS
]);
const ACCENT_COLORS = [
    {
        name: "Sky",
        value: "rgb(56, 189, 248)",
        tailwind: "sky-400"
    },
    {
        name: "Emerald",
        value: "rgb(52, 211, 153)",
        tailwind: "emerald-400"
    },
    {
        name: "Violet",
        value: "rgb(167, 139, 250)",
        tailwind: "violet-400"
    },
    {
        name: "Rose",
        value: "rgb(251, 113, 133)",
        tailwind: "rose-400"
    },
    {
        name: "Amber",
        value: "rgb(251, 191, 36)",
        tailwind: "amber-400"
    },
    {
        name: "Cyan",
        value: "rgb(34, 211, 238)",
        tailwind: "cyan-400"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/MAN_MVP/frontend/src/components/constants/temperaturecolors.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "humidityToColor",
    ()=>humidityToColor,
    "tempToColor",
    ()=>tempToColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
const temperatureGradient = [
    {
        t: 0.0,
        color: new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#1b2c7a")
    },
    {
        t: 0.15,
        color: new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#2458b3")
    },
    {
        t: 0.3,
        color: new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#2fa4d9")
    },
    {
        t: 0.45,
        color: new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#6bd6a8")
    },
    {
        t: 0.6,
        color: new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#f2e85c")
    },
    {
        t: 0.75,
        color: new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#f5a142")
    },
    {
        t: 0.9,
        color: new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#e4572e")
    },
    {
        t: 1.0,
        color: new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#b31217")
    }
];
function tempToColor(temp, minTemp = -30, maxTemp = 45) {
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].clamp((temp - minTemp) / (maxTemp - minTemp), 0, 1);
    for(let i = 0; i < temperatureGradient.length - 1; i++){
        const a = temperatureGradient[i];
        const b = temperatureGradient[i + 1];
        if (t >= a.t && t <= b.t) {
            const localT = (t - a.t) / (b.t - a.t);
            return a.color.clone().lerp(b.color, localT);
        }
    }
    return temperatureGradient.at(-1).color.clone();
}
function humidityToColor(humidity, minHumidity = 0, maxHumidity = 100) {
    const t = Math.max(0, Math.min(1, (humidity - minHumidity) / (maxHumidity - minHumidity)));
    const color = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]();
    if (t < 0.33) {
        color.lerpColors(new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xffeecc), new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xaaddff), t / 0.33);
    } else if (t < 0.66) {
        color.lerpColors(new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xaaddff), new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0x4488ff), (t - 0.33) / 0.33);
    } else {
        color.lerpColors(new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0x4488ff), new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0x0033aa), (t - 0.66) / 0.34);
    }
    return color;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/MAN_MVP/frontend/src/components/interface/MapLegend.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapLegend",
    ()=>MapLegend
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$constants$2f$temperaturecolors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/src/components/constants/temperaturecolors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function buildTemperatureLegend() {
    const points = [
        -30,
        -10,
        0,
        10,
        20,
        30,
        40
    ];
    return points.map((t)=>({
            value: t,
            label: `${t}°C`,
            color: `#${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$constants$2f$temperaturecolors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tempToColor"])(t).getHexString()}`
        }));
}
function buildHumidityLegend() {
    const points = [
        0,
        20,
        40,
        60,
        80,
        100
    ];
    return points.map((h)=>({
            value: h,
            label: `${h}%`,
            color: `#${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$constants$2f$temperaturecolors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["humidityToColor"])(h).getHexString()}`
        }));
}
function MapLegend({ mode, className }) {
    const items = mode === "temperature" ? buildTemperatureLegend() : buildHumidityLegend();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full bottom-4 left-4 z-20 rounded-lg bg-neutral-900/90 backdrop-blur p-3", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2 text-xs font-medium text-neutral-300",
                children: mode === "temperature" ? "Температура" : "Вологість"
            }, void 0, false, {
                fileName: "[project]/Projects/MAN_MVP/frontend/src/components/interface/MapLegend.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1",
                children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-6 h-4 rounded-sm border border-black/30",
                                style: {
                                    backgroundColor: item.color
                                }
                            }, void 0, false, {
                                fileName: "[project]/Projects/MAN_MVP/frontend/src/components/interface/MapLegend.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-neutral-400 mt-1",
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/Projects/MAN_MVP/frontend/src/components/interface/MapLegend.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this)
                        ]
                    }, item.value, true, {
                        fileName: "[project]/Projects/MAN_MVP/frontend/src/components/interface/MapLegend.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Projects/MAN_MVP/frontend/src/components/interface/MapLegend.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/MAN_MVP/frontend/src/components/interface/MapLegend.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_c = MapLegend;
var _c;
__turbopack_context__.k.register(_c, "MapLegend");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/MAN_MVP/frontend/src/components/constants/defaults.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULTS",
    ()=>DEFAULTS
]);
const DEFAULTS = {
    buildingHeight: 50,
    roadY: 0.12,
    roadWidths: {
        motorway: 15,
        trunk: 12,
        primary: 10,
        secondary: 8,
        tertiary: 6,
        residential: 5,
        service: 3,
        path: 2,
        footway: 1.5
    },
    roadColors: {
        motorway: 0xe892a2,
        trunk: 0xf9b29c,
        primary: 0xfcd6a4,
        secondary: 0xf7fabf,
        tertiary: 0xffffff,
        residential: 0xffffff,
        service: 0xffffff,
        path: 0xc5b3a0,
        footway: 0xc5b3a0
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/MAN_MVP/frontend/src/components/three/GeometryRenderers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_lineToMesh",
    ()=>_lineToMesh,
    "coordsToShape",
    ()=>coordsToShape,
    "ensureClosed",
    ()=>ensureClosed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$constants$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/src/components/constants/defaults.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
;
function _lineToMesh(coords = [], props = {}) {
    if (!Array.isArray(coords) || coords.length < 2) return null;
    const y = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$constants$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULTS"].roadY;
    const pts = coords.map(([lon, lat])=>{
        const [x, z] = this.toLocal(lon, lat);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](x, y, z);
    });
    const width = this._getRoadWidth(props);
    const positions = [];
    const uvs = [];
    const indices = [];
    for(let i = 0; i < pts.length - 1; i++){
        const p1 = pts[i], p2 = pts[i + 1];
        const dir = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().subVectors(p2, p1);
        const len = dir.length();
        if (len === 0) continue;
        dir.normalize();
        const perp = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-dir.z, 0, dir.x).multiplyScalar(width / 2);
        const v1 = p1.clone().add(perp);
        const v2 = p1.clone().sub(perp);
        const v3 = p2.clone().add(perp);
        const v4 = p2.clone().sub(perp);
        const baseIdx = i * 4;
        positions.push(v1.x, v1.y, v1.z, v2.x, v2.y, v2.z, v3.x, v3.y, v3.z, v4.x, v4.y, v4.z);
        const u = i / (pts.length - 1);
        const du = 1 / (pts.length - 1);
        uvs.push(u, 0, u, 1, u + du, 0, u + du, 1);
        indices.push(baseIdx, baseIdx + 1, baseIdx + 2, baseIdx + 1, baseIdx + 3, baseIdx + 2);
    }
    const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
    geometry.setAttribute("position", new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Float32BufferAttribute"](positions, 3));
    geometry.setAttribute("uv", new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Float32BufferAttribute"](uvs, 2));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    const material = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: this._getRoadColor(props),
        roughness: 1.0,
        metalness: 0.0,
        polygonOffset: true,
        polygonOffsetFactor: -3,
        polygonOffsetUnits: -3
    });
    const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geometry, material);
    mesh.rotation.x = -Math.PI;
    return mesh;
}
function ensureClosed(ring = []) {
    if (!Array.isArray(ring) || ring.length === 0) return ring;
    const first = ring[0];
    const last = ring[ring.length - 1];
    if (first[0] === last[0] && first[1] === last[1]) return ring;
    return [
        ...ring,
        first
    ];
}
function coordsToShape(polygonCoords = []) {
    if (!Array.isArray(polygonCoords) || polygonCoords.length === 0) return null;
    const outer = ensureClosed.call(this, polygonCoords[0]);
    if (!outer || outer.length < 3) return null;
    const shape = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shape"]();
    for(let i = 0; i < outer.length; i++){
        const [lon, lat] = outer[i];
        const [x, z] = this.toLocal(lon, lat);
        if (i === 0) shape.moveTo(x, z);
        else shape.lineTo(x, z);
    }
    for(let i = 1; i < polygonCoords.length; i++){
        const hole = ensureClosed.call(this, polygonCoords[i]);
        if (!hole || hole.length < 3) continue;
        const pts = hole.map(([lon, lat])=>{
            const [x, z] = this.toLocal(lon, lat);
            return new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](x, z);
        });
        shape.holes.push(new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Path"](pts));
    }
    return shape;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/MAN_MVP/frontend/src/components/three/ChunkLoader.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChunkLoader",
    ()=>ChunkLoader,
    "createProjectionHelpers",
    ()=>createProjectionHelpers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$proj4$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/proj4/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$constants$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/src/components/constants/defaults.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$three$2f$GeometryRenderers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/src/components/three/GeometryRenderers.js [app-client] (ecmascript)");
;
;
;
;
;
const WGS84 = "EPSG:4326";
const WEB_MERCATOR = "EPSG:3857";
const clamp = (v, a, b)=>Math.max(a, Math.min(b, v));
/* ---------- Base Renderer ---------- */ class LayerRenderer {
    constructor(centerOffset = [
        0,
        0
    ]){
        this.centerOffset = centerOffset;
        this._projFrom = WGS84;
        this._projTo = WEB_MERCATOR;
    }
    toLocal(lon, lat) {
        const [x0, z0] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$proj4$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this._projFrom, this._projTo, [
            lon,
            lat
        ]);
        return [
            x0 - this.centerOffset[0],
            z0 - this.centerOffset[1]
        ];
    }
    renderFeature() {
        throw new Error("renderFeature must be implemented by subclass");
    }
}
/* ---------- Polygon Base ---------- */ class PolygonRendererBase extends LayerRenderer {
    _ensureClosed(ring = []) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$three$2f$GeometryRenderers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureClosed"].call(this, ring);
    }
    _coordsToShape(polygonCoords = []) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$three$2f$GeometryRenderers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coordsToShape"].call(this, polygonCoords);
    }
}
/* ---------- Buildings ---------- */ class BuildingsRenderer extends PolygonRendererBase {
    renderFeature(feature) {
        const { geometry, properties = {} } = feature;
        if (!geometry) return [];
        const height = properties.height ?? __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$constants$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULTS"].buildingHeight;
        const meshes = [];
        const handleCoords = (coords)=>{
            const shape = this._coordsToShape(coords);
            if (!shape) return;
            const extrude = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExtrudeGeometry"](shape, {
                depth: height,
                bevelEnabled: false
            });
            extrude.rotateX(-Math.PI / 2);
            const mat = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color: 0xcccccc,
                roughness: 0.8,
                metalness: 0.2
            });
            const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](extrude, mat);
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            meshes.push(mesh);
        };
        if (geometry.type === "Polygon") handleCoords(geometry.coordinates);
        else if (geometry.type === "MultiPolygon") for (const poly of geometry.coordinates)handleCoords(poly);
        return meshes;
    }
}
/* ---------- Rivers ---------- */ class RiversRenderer extends PolygonRendererBase {
    renderFeature(feature) {
        const { geometry } = feature;
        if (!geometry) return [];
        const meshes = [];
        const handleCoords = (coords)=>{
            const shape = this._coordsToShape(coords);
            if (!shape) return;
            const geom = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShapeGeometry"](shape);
            geom.rotateX(-Math.PI / 2);
            const mat = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color: 0xaaddff,
                roughness: 0.6,
                metalness: 0.1
            });
            const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geom, mat);
            mesh.receiveShadow = true;
            meshes.push(mesh);
        };
        if (geometry.type === "Polygon") handleCoords(geometry.coordinates);
        else if (geometry.type === "MultiPolygon") for (const poly of geometry.coordinates)handleCoords(poly);
        return meshes;
    }
}
class RoadsRenderer extends LayerRenderer {
    renderFeature(feature) {
        const { geometry, properties = {} } = feature;
        if (!geometry) return [];
        const meshes = [];
        const handleLine = (coords)=>{
            const mesh = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$three$2f$GeometryRenderers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_lineToMesh"].call(this, coords, properties);
            if (mesh) meshes.push(mesh);
        };
        if (geometry.type === "LineString") handleLine(geometry.coordinates);
        else if (geometry.type === "MultiLineString") for (const ls of geometry.coordinates)handleLine(ls);
        return meshes;
    }
    _getRoadWidth(props = {}) {
        const t = props.fclass || props.highway || props.type || "residential";
        return __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$constants$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULTS"].roadWidths[t] ?? 5;
    }
    _getRoadColor(props = {}) {
        const t = props.fclass || props.highway || props.type || "residential";
        return __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$constants$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULTS"].roadColors[t] ?? 0xdddddd;
    }
}
/* ---------- Renderer Registry ---------- */ const RENDERERS = {
    buildings: BuildingsRenderer,
    roads: RoadsRenderer,
    rivers: RiversRenderer
};
class ChunkLoader {
    constructor(scene, opts = {}){
        this.scene = scene;
        this.loaded = new Map();
        this.meshGroups = new Map();
        this.url = opts.url || `${"TURBOPACK compile-time value", "http://127.0.0.1:8000"}/chunk`;
        this.onProgress = opts.onProgress || (()=>{});
        this.centerOffset = opts.centerOffset || [
            0,
            0
        ];
        this.layerType = opts.layerType || "buildings";
        if (opts.customRenderer) {
            this.renderer = opts.customRenderer;
        } else {
            const Renderer = RENDERERS[this.layerType] || BuildingsRenderer;
            this.renderer = new Renderer(this.centerOffset);
        }
    }
    _chunkKey(a, b, c, d) {
        return `${a.toFixed(6)}_${b.toFixed(6)}_${c.toFixed(6)}_${d.toFixed(6)}`;
    }
    clampLatLon(lon, lat) {
        lon = clamp(lon, -180, 180);
        lat = clamp(lat, -85.0511, 85.0511);
        return [
            lon,
            lat
        ];
    }
    async loadChunk(minLon, minLat, maxLon, maxLat, opts = {}) {
        const { simplify = 1, signal = null, useCache = true, keyHint = null } = opts;
        const [minx, miny] = this.clampLatLon(minLon, minLat);
        const [maxx, maxy] = this.clampLatLon(maxLon, maxLat);
        const key = keyHint || this._chunkKey(minx, miny, maxx, maxy);
        if (useCache && this.loaded.has(key)) return this.loaded.get(key);
        this.loaded.set(key, null);
        const qs = new URLSearchParams({
            minx: String(minx),
            miny: String(miny),
            maxx: String(maxx),
            maxy: String(maxy),
            simplify: String(simplify)
        });
        const url = `${this.url}?${qs.toString()}`;
        try {
            const t0 = performance.now();
            const r = await fetch(url, {
                signal
            });
            if (!r.ok) throw new Error(`server ${r.status}`);
            const data = await r.json();
            this.loaded.set(key, data);
            const rendered = this._renderData(data, key);
            this.onProgress({
                key,
                featuresTotal: data.features?.length || data.points?.length || 0,
                rendered,
                meshesTotal: this.meshGroups.size,
                queryTimeMs: Math.round(performance.now() - t0),
                bounds: {
                    minx,
                    miny,
                    maxx,
                    maxy
                }
            });
            return data;
        } catch (e) {
            this.loaded.delete(key);
            if (e.name !== "AbortError") console.error("ChunkLoader error:", e);
            return null;
        }
    }
    _renderData(data, key) {
        if (!data) return 0;
        if (this.meshGroups.has(key)) {
            const old = this.meshGroups.get(key);
            this.scene.remove(old);
            old.traverse((n)=>{
                if (n.geometry) n.geometry.dispose();
                if (n.material) n.material.dispose();
            });
            this.meshGroups.delete(key);
        }
        const group = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
        let rendered = 0;
        if (typeof this.renderer.renderWeatherData === "function" && data.points) {
            const meshes = this.renderer.renderWeatherData(data) || [];
            for (const m of meshes){
                if (!m) continue;
                group.add(m);
                rendered++;
            }
        } else if (data.features) {
            for (const feature of data.features){
                if (!feature?.geometry) continue;
                const meshes = this.renderer.renderFeature(feature) || [];
                for (const m of meshes){
                    if (!m) continue;
                    group.add(m);
                    rendered++;
                }
            }
        }
        if (rendered > 0) {
            this.scene.add(group);
            this.meshGroups.set(key, group);
        }
        return rendered;
    }
    removeChunk(key) {
        const g = this.meshGroups.get(key);
        if (!g) return;
        this.scene.remove(g);
        g.traverse((n)=>{
            if (n.geometry) n.geometry.dispose();
            if (n.material) n.material.dispose();
        });
        this.meshGroups.delete(key);
        this.loaded.delete(key);
    }
    clearAll() {
        for (const key of Array.from(this.meshGroups.keys()))this.removeChunk(key);
        this.loaded.clear();
    }
}
function createProjectionHelpers(centerOffset) {
    return {
        toLocal: (lon, lat)=>{
            const [x0, z0] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$proj4$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(WGS84, WEB_MERCATOR, [
                lon,
                lat
            ]);
            return [
                x0 - centerOffset[0],
                z0 - centerOffset[1]
            ];
        }
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/MAN_MVP/frontend/src/components/three/Renderer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createRenderer",
    ()=>createRenderer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
;
function createRenderer(container) {
    const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
        antialias: true
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);
    return renderer;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/MAN_MVP/frontend/src/components/three/Camera.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCamera",
    ()=>createCamera
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
function createCamera(width, height) {
    const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](0.1, width / height, 120, 100000000);
    camera.position.set(0, 10, 10);
    camera.lookAt(0, 0, 0);
    return camera;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/MAN_MVP/frontend/src/components/three/Materials.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildingMaterial",
    ()=>buildingMaterial,
    "planeMaterial",
    ()=>planeMaterial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
const buildingMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
    color: 0x66ccff
});
const planeMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
    color: 0xa5d6a7
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/MAN_MVP/frontend/src/components/three/Scene.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createScene",
    ()=>createScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$three$2f$Materials$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/src/components/three/Materials.js [app-client] (ecmascript)");
;
;
function createScene() {
    const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
    const cube = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](), __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$three$2f$Materials$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildingMaterial"]);
    scene.add(cube);
    const light = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DirectionalLight"](0xffffff, 1);
    light.position.set(2, 2, 2);
    scene.add(light);
    return {
        scene,
        cube
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/MAN_MVP/frontend/src/components/three/Controls.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createControls",
    ()=>createControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$examples$2f$jsm$2f$controls$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/three/examples/jsm/controls/OrbitControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
;
function createControls(camera, domElement) {
    const controls = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$examples$2f$jsm$2f$controls$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"](camera, domElement);
    controls.enablePan = true;
    controls.enableZoom = true;
    controls.enableRotate = true;
    controls.mouseButtons = {
        LEFT: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOUSE"].PAN,
        MIDDLE: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOUSE"].DOLLY,
        RIGHT: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOUSE"].ROTATE
    };
    controls.panSpeed = 1;
    controls.rotateSpeed = 0.2;
    controls.zoomSpeed = 1.5;
    controls.minPolarAngle = 0.1;
    controls.maxPolarAngle = Math.PI / 2;
    controls.addEventListener("wheel", (event)=>{
        const delta = event.deltaY * 0.01;
        camera.position.addScaledVector(camera.getWorldDirection(new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]()), delta);
        event.preventDefault();
    });
    return controls;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/MAN_MVP/frontend/src/components/three/Raycast.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setupRaycast",
    ()=>setupRaycast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
function setupRaycast(dom, camera, scene, controls, container) {
    const raycaster = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Raycaster"]();
    const mouse = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"]();
    function onMouseDown(event) {
        if (event.button !== 2) return;
        mouse.x = event.clientX / container.clientWidth * 2 - 1;
        mouse.y = -(event.clientY / container.clientHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        const hits = raycaster.intersectObjects(scene.children, true);
        if (hits.length > 0) controls.target.copy(hits[0].point);
    }
    dom.addEventListener("mousedown", onMouseDown);
    return ()=>{
        dom.removeEventListener("mousedown", onMouseDown);
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/MAN_MVP/frontend/src/components/modules/projection.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "computeTileSizeFromStep",
    ()=>computeTileSizeFromStep,
    "lonLatToWebMercator",
    ()=>lonLatToWebMercator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$proj4$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/proj4/lib/index.js [app-client] (ecmascript)");
;
const WGS84 = "EPSG:4326";
const WEB_MERCATOR = "EPSG:3857";
function lonLatToWebMercator(lon, lat) {
    const res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$proj4$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(WGS84, WEB_MERCATOR, [
        lon,
        lat
    ]);
    return [
        res[0],
        res[1]
    ];
}
function computeTileSizeFromStep(step, lat = 0) {
    const [x1, z1] = lonLatToWebMercator(0, lat);
    const [x2, z2] = lonLatToWebMercator(step, lat);
    const [x3, z3] = lonLatToWebMercator(0, lat + step);
    return {
        sizeX: Math.abs(x2 - x1),
        sizeZ: Math.abs(z3 - z1)
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/MAN_MVP/frontend/src/components/three/WeatherRenderer.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WeatherRenderer",
    ()=>WeatherRenderer,
    "createWeatherLoader",
    ()=>createWeatherLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$constants$2f$temperaturecolors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/src/components/constants/temperaturecolors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$modules$2f$projection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/src/components/modules/projection.ts [app-client] (ecmascript)");
;
;
;
class WeatherRenderer {
    constructor(projectionHelpers, opts = {}){
        this.toLocal = projectionHelpers.toLocal;
        this.elevationAboveGround = opts.elevationAboveGround ?? 20;
        this.mode = opts.mode ?? "temperature";
        this.minTemp = opts.minTemp ?? -30;
        this.maxTemp = opts.maxTemp ?? 40;
        this.minHumidity = opts.minHumidity ?? 0;
        this.maxHumidity = opts.maxHumidity ?? 100;
    }
    _getTileSize(lon, lat, step) {
        const half = step / 2;
        const [x1, z1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$modules$2f$projection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lonLatToWebMercator"])(lon - half, lat - half);
        const [x2, z2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$modules$2f$projection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lonLatToWebMercator"])(lon + half, lat + half);
        return {
            sizeX: Math.abs(x2 - x1),
            sizeZ: Math.abs(z2 - z1)
        };
    }
    _createTile({ lat, lon, temperature, humidity, step }) {
        if (typeof lat !== "number" || typeof lon !== "number" || !Number.isFinite(lat) || !Number.isFinite(lon)) {
            return null;
        }
        const { sizeX, sizeZ } = this._getTileSize(lon, lat, step);
        const [x, z] = this.toLocal(lon, lat);
        let color;
        if (this.mode === "temperature") {
            color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$constants$2f$temperaturecolors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tempToColor"])(temperature, this.minTemp, this.maxTemp);
        } else {
            color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$constants$2f$temperaturecolors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["humidityToColor"])(humidity, this.minHumidity, this.maxHumidity);
        }
        const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](sizeX, sizeZ);
        const material = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
            color,
            transparent: true,
            opacity: 0.5,
            side: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
        });
        const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geometry, material);
        mesh.rotation.x = -Math.PI / 2;
        mesh.position.set(x, this.elevationAboveGround, z);
        mesh.userData = {
            lat,
            lon,
            temperature,
            humidity
        };
        return mesh;
    }
    renderWeatherData(data, step) {
        if (!data?.points) return [];
        return data.points.map((p)=>this._createTile({
                ...p,
                step
            })).filter(Boolean);
    }
    // Новый метод для обновления цветов существующих мешей
    updateMeshColors(mesh) {
        const { temperature, humidity } = mesh.userData;
        let color;
        if (this.mode === "temperature") {
            color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$constants$2f$temperaturecolors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tempToColor"])(temperature, this.minTemp, this.maxTemp);
        } else {
            color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$constants$2f$temperaturecolors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["humidityToColor"])(humidity, this.minHumidity, this.maxHumidity);
        }
        mesh.material.color.copy(color);
    }
}
function createWeatherLoader(scene, options) {
    const { url, centerOffset = [
        0,
        0
    ], minTemp = -30, maxTemp = 40, minHumidity = 0, maxHumidity = 100, mode: initialMode = "temperature", step = 0.05, elevationAboveGround = 20, opacity = 0.5, onProgress } = options;
    const loaded = new Map();
    const meshGroups = new Map();
    const projectionHelpers = {
        toLocal: (lon, lat)=>{
            const [x, z] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$modules$2f$projection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lonLatToWebMercator"])(lon, lat);
            return [
                x - centerOffset[0],
                z - centerOffset[1]
            ];
        }
    };
    const renderer = new WeatherRenderer(projectionHelpers, {
        mode: initialMode,
        minTemp,
        maxTemp,
        minHumidity,
        maxHumidity,
        elevationAboveGround
    });
    function _chunkKey(minLon, minLat, maxLon, maxLat) {
        return `${minLon.toFixed(4)}_${minLat.toFixed(4)}_${maxLon.toFixed(4)}_${maxLat.toFixed(4)}`;
    }
    async function loadChunk(minLon, minLat, maxLon, maxLat, opts = {}) {
        const key = opts.keyHint || _chunkKey(minLon, minLat, maxLon, maxLat);
        if (loaded.has(key)) {
            return;
        }
        const params = new URLSearchParams({
            min_lat: minLat.toString(),
            max_lat: maxLat.toString(),
            min_lon: minLon.toString(),
            max_lon: maxLon.toString(),
            step: step.toString()
        });
        try {
            const baseUrl = url || `${"TURBOPACK compile-time value", "http://127.0.0.1:8000"}/weather/area`;
            const res = await fetch(`${baseUrl}?${params}`, {
                signal: opts.signal
            });
            if (!res.ok) {
                console.warn(`Weather fetch failed: ${res.status}`);
                return;
            }
            const data = await res.json();
            if (!data?.points || data.points.length === 0) {
                return;
            }
            _renderChunk(key, data);
            loaded.set(key, data);
            if (onProgress) {
                onProgress({
                    rendered: meshGroups.size,
                    key
                });
            }
        } catch (e) {
            if (e?.name !== "AbortError") {
                console.error("Weather load error:", e);
            }
        }
    }
    function _renderChunk(key, data) {
        if (meshGroups.has(key)) {
            removeChunk(key);
        }
        const group = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
        const meshes = renderer.renderWeatherData(data, step);
        for (const mesh of meshes){
            group.add(mesh);
        }
        if (group.children.length > 0) {
            scene.add(group);
            meshGroups.set(key, group);
        }
    }
    function removeChunk(key) {
        const group = meshGroups.get(key);
        if (!group) return;
        scene.remove(group);
        group.traverse((obj)=>{
            if (obj.geometry) obj.geometry.dispose();
            if (obj.material) obj.material.dispose();
        });
        meshGroups.delete(key);
        loaded.delete(key);
    }
    function setMode(newMode) {
        if (newMode === renderer.mode) return;
        renderer.mode = newMode;
        // Обновляем цвета всех существующих мешей
        for (const group of meshGroups.values()){
            group.traverse((obj)=>{
                if (obj.isMesh && obj.userData.temperature !== undefined) {
                    renderer.updateMeshColors(obj);
                }
            });
        }
    }
    function clearAll() {
        for (const key of Array.from(meshGroups.keys())){
            removeChunk(key);
        }
    }
    return {
        loadChunk,
        setMode,
        clearAll,
        removeChunk,
        get mode () {
            return renderer.mode;
        },
        get meshGroups () {
            return meshGroups;
        }
    };
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/MAN_MVP/frontend/src/components/scene/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// constants.js
__turbopack_context__.s([
    "DEFAULTS",
    ()=>DEFAULTS,
    "GROUND_CONFIG",
    ()=>GROUND_CONFIG,
    "LIGHTING",
    ()=>LIGHTING,
    "PROJECTIONS",
    ()=>PROJECTIONS,
    "ROAD_VISIBILITY",
    ()=>ROAD_VISIBILITY,
    "WEATHER_CONFIG",
    ()=>WEATHER_CONFIG
]);
const PROJECTIONS = {
    WGS84: "EPSG:4326",
    WEB_MERCATOR: "EPSG:3857"
};
const LIGHTING = {
    DAY: {
        skyColor: 0xbfd9ff,
        dirIntensity: 1.2,
        dirColor: 0xffffff,
        ambIntensity: 0.35,
        ambColor: 0xffffff
    },
    NIGHT: {
        skyColor: 0x0a0a1a,
        dirIntensity: 0.15,
        dirColor: 0x9999bb,
        ambIntensity: 0.08,
        ambColor: 0x4444aa
    }
};
const DEFAULTS = {
    TILE_SIZE: 0.05,
    VIEW_RADIUS: 5,
    CAMERA_FOV: 60,
    CAMERA_HEIGHT: 800,
    CAMERA_DISTANCE: 800,
    UPDATE_DEBOUNCE: 250,
    HIDE_BUILDINGS_HEIGHT: 15000
};
const ROAD_VISIBILITY = {
    MAJOR: {
        types: [
            "motorway",
            "trunk",
            "primary"
        ],
        distance: Infinity
    },
    MINOR: {
        types: [
            "footway",
            "path",
            "service"
        ],
        distance: 800
    },
    DEFAULT: {
        distance: Infinity
    }
};
const WEATHER_CONFIG = {
    MIN_TEMP: -20,
    MAX_TEMP: 40,
    MIN_HUMIDITY: 0,
    MAX_HUMIDITY: 100,
    TILE_SIZE: 50,
    ELEVATION: 0.2,
    OPACITY: 0.7,
    STEP: 0.05
};
const GROUND_CONFIG = {
    SIZE: 500000,
    COLOR: 0xf0f0f0,
    Y_OFFSET: -0.5
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/MAN_MVP/frontend/src/components/scene/LightingManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// LightingManager.js
__turbopack_context__.s([
    "LightingManager",
    ()=>LightingManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$scene$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/src/components/scene/constants.js [app-client] (ecmascript)");
;
;
class LightingManager {
    constructor(scene){
        this.scene = scene;
        this.dirLight = null;
        this.ambLight = null;
        this.isNightMode = false;
        this.init();
    }
    init() {
        this.dirLight = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DirectionalLight"](__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$scene$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].DAY.dirColor, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$scene$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].DAY.dirIntensity);
        this.dirLight.position.set(1000, 2000, 1000);
        this.ambLight = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmbientLight"](__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$scene$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].DAY.ambColor, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$scene$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].DAY.ambIntensity);
        this.scene.add(this.dirLight);
        this.scene.add(this.ambLight);
    }
    setNightMode(enabled) {
        if (this.isNightMode === enabled) return;
        this.isNightMode = enabled;
        const config = enabled ? __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$scene$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].NIGHT : __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$scene$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].DAY;
        this.scene.background = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](config.skyColor);
        this.dirLight.intensity = config.dirIntensity;
        this.dirLight.color.setHex(config.dirColor);
        this.ambLight.intensity = config.ambIntensity;
        this.ambLight.color.setHex(config.ambColor);
    }
    updateDirectionalLight(cameraPosition) {
        this.dirLight.position.set(cameraPosition.x, 2000, cameraPosition.z);
    }
    dispose() {
        if (this.dirLight) {
            this.scene.remove(this.dirLight);
            this.dirLight = null;
        }
        if (this.ambLight) {
            this.scene.remove(this.ambLight);
            this.ambLight = null;
        }
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/MAN_MVP/frontend/src/components/scene/sceneUtils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// sceneUtils.js
__turbopack_context__.s([
    "cleanupUnusedChunks",
    ()=>cleanupUnusedChunks,
    "createGround",
    ()=>createGround,
    "generateTilesToLoad",
    ()=>generateTilesToLoad,
    "setLayerVisibility",
    ()=>setLayerVisibility,
    "setVisibleRecursive",
    ()=>setVisibleRecursive,
    "updateRoadVisibility",
    ()=>updateRoadVisibility
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
function setVisibleRecursive(object, visible) {
    if (!object) return;
    object.visible = visible;
    if (object.children && object.children.length > 0) {
        object.children.forEach((child)=>setVisibleRecursive(child, visible));
    }
}
function setLayerVisibility(meshGroups, visible) {
    if (!meshGroups) return;
    for (const group of meshGroups.values()){
        setVisibleRecursive(group, visible);
    }
}
function cleanupUnusedChunks(loader, layerName, activeTiles) {
    if (!loader?.meshGroups) return;
    for (const key of loader.meshGroups.keys()){
        const re = new RegExp(`^${layerName}_(-?\\d+)_(-?\\d+)$`);
        const match = key.match(re);
        if (match && !activeTiles.has(`${match[1]}_${match[2]}`)) {
            loader.removeChunk?.(key);
        }
    }
}
function createGround(size, color, yOffset) {
    const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](size, size, 1, 1);
    const material = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color,
        roughness: 1,
        metalness: 0
    });
    const ground = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geometry, material);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = yOffset;
    ground.receiveShadow = true;
    return ground;
}
function updateRoadVisibility(roadsLoader, camera, roadConfig) {
    if (!roadsLoader?.meshGroups) return;
    for (const group of roadsLoader.meshGroups.values()){
        group.traverse((obj)=>{
            if (!obj.isLine) return;
            const roadType = obj.userData.roadType || "unknown";
            const dist = camera.position.distanceTo(obj.position);
            // Основные дороги
            if (roadConfig.MAJOR.types.includes(roadType)) {
                const k = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].clamp(2000 / dist, 0.4, 2.5);
                obj.material.color.setScalar(0.4 + k * 0.6);
                obj.scale.set(k, k, k);
                obj.visible = true;
            } else if (roadConfig.MINOR.types.includes(roadType)) {
                obj.visible = dist < roadConfig.MINOR.distance;
                if (obj.visible) {
                    const k = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].clamp(900 / dist, 0.2, 1.0);
                    obj.material.color.setScalar(0.25 + k * 0.3);
                    obj.scale.set(k, k, k);
                }
            } else {
                const k = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].clamp(1200 / dist, 0.3, 1.3);
                obj.material.color.setScalar(0.3 + k * 0.4);
                obj.scale.set(k, k, k);
                obj.visible = true;
            }
        });
    }
}
function generateTilesToLoad(centerLon, centerLat, tileSize, viewRadius) {
    const centerTileX = Math.floor(centerLon / tileSize);
    const centerTileY = Math.floor(centerLat / tileSize);
    const tilesToLoad = [];
    const activeTiles = new Set();
    for(let dx = -viewRadius; dx <= viewRadius; dx++){
        for(let dy = -viewRadius; dy <= viewRadius; dy++){
            const tileX = centerTileX + dx;
            const tileY = centerTileY + dy;
            const minLon = tileX * tileSize;
            const minLat = tileY * tileSize;
            const maxLon = (tileX + 1) * tileSize;
            const maxLat = (tileY + 1) * tileSize;
            const tileKey = `${tileX}_${tileY}`;
            activeTiles.add(tileKey);
            tilesToLoad.push({
                minLon,
                minLat,
                maxLon,
                maxLat,
                key: tileKey
            });
        }
    }
    return {
        tilesToLoad,
        activeTiles
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/MAN_MVP/frontend/src/components/scene/ThreeScene.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThreeScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$proj4$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/proj4/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$three$2f$ChunkLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/src/components/three/ChunkLoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$three$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/src/components/three/Renderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$three$2f$Camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/src/components/three/Camera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$three$2f$Scene$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/src/components/three/Scene.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$three$2f$Controls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/src/components/three/Controls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$three$2f$Raycast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/src/components/three/Raycast.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$three$2f$WeatherRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/src/components/three/WeatherRenderer.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$scene$2f$LightingManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/src/components/scene/LightingManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$scene$2f$sceneUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/src/components/scene/sceneUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$scene$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/src/components/scene/constants.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
function ThreeScene({ settings = {} }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cameraRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rendererRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const controlsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sceneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cubeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const frameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const updateTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const controllerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isLoadingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const lightingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const groundRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const loadersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        chunks: 0,
        meshes: 0,
        features: 0,
        lastQueryMs: 0,
        buildings: 0,
        roads: 0,
        water: 0,
        weather: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThreeScene.useEffect": ()=>{
            const bLoader = loadersRef.current.get("buildings");
            if (!bLoader?.meshGroups) return;
            const visible = settings.buildings !== false;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$scene$2f$sceneUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLayerVisibility"])(bLoader.meshGroups, visible);
        }
    }["ThreeScene.useEffect"], [
        settings.buildings
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThreeScene.useEffect": ()=>{
            const weatherLoader = loadersRef.current.get("weather");
            if (!weatherLoader) return;
            const shouldShow = settings.temperature || settings.humidity;
            if (!shouldShow) {
                weatherLoader.clearAll();
                return;
            }
            const newMode = settings.temperature ? "temperature" : "humidity";
            weatherLoader.setMode(newMode);
        }
    }["ThreeScene.useEffect"], [
        settings.temperature,
        settings.humidity
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThreeScene.useEffect": ()=>{
            const lighting = lightingRef.current;
            if (!lighting) return;
            lighting.setNightMode(settings.nightMode === true);
        }
    }["ThreeScene.useEffect"], [
        settings.nightMode
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThreeScene.useEffect": ()=>{
            const container = containerRef.current;
            if (!container) return;
            const envBase = ("TURBOPACK compile-time value", "http://127.0.0.1:8000") || "http://127.0.0.1:8000";
            const startLon = parseFloat(("TURBOPACK compile-time value", "32.000757") || "0");
            const startLat = parseFloat(("TURBOPACK compile-time value", "47.015347") || "0");
            const [centerX, centerZ] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$proj4$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$scene$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROJECTIONS"].WGS84, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$scene$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROJECTIONS"].WEB_MERCATOR, [
                startLon,
                startLat
            ]);
            const endpoints = {
                buildings: settings.endpoints?.buildings || `${envBase}/chunk/buildings`,
                roads: settings.endpoints?.roads || `${envBase}/chunk/roads`,
                water: settings.endpoints?.water || `${envBase}/chunk/water`
            };
            const getLoader = {
                "ThreeScene.useEffect.getLoader": (layerKey, scene, opts = {})=>{
                    if (settings.loaders?.[layerKey]) return settings.loaders[layerKey];
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$three$2f$ChunkLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChunkLoader"](scene, opts);
                }
            }["ThreeScene.useEffect.getLoader"];
            const renderer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$three$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRenderer"])(container);
            rendererRef.current = renderer;
            renderer.outputColorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
            renderer.toneMapping = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACESFilmicToneMapping"];
            renderer.toneMappingExposure = 1.0;
            const camera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$three$2f$Camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCamera"])(container.clientWidth, container.clientHeight);
            camera.fov = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$scene$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULTS"].CAMERA_FOV;
            camera.updateProjectionMatrix();
            camera.position.set(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$scene$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULTS"].CAMERA_HEIGHT, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$scene$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULTS"].CAMERA_DISTANCE);
            camera.lookAt(0, 0, 0);
            cameraRef.current = camera;
            const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$three$2f$Controls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createControls"])(camera, renderer.domElement);
            controls.target.set(0, 0, 0);
            controls.update();
            controlsRef.current = controls;
            const { scene, cube } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$three$2f$Scene$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createScene"])();
            sceneRef.current = scene;
            cubeRef.current = cube;
            const lighting = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$scene$2f$LightingManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LightingManager"](scene);
            lighting.setNightMode(settings.nightMode === true);
            lightingRef.current = lighting;
            const cleanupRaycast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$three$2f$Raycast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupRaycast"])(renderer.domElement, camera, scene, controls, container);
            const buildingsLoader = getLoader("buildings", scene, {
                url: endpoints.buildings,
                centerOffset: [
                    centerX,
                    centerZ
                ],
                layerType: "buildings",
                onProgress: {
                    "ThreeScene.useEffect.buildingsLoader": (meta)=>{
                        setStatus({
                            "ThreeScene.useEffect.buildingsLoader": (s)=>({
                                    ...s,
                                    buildings: meta.rendered || 0,
                                    lastQueryMs: meta.queryTimeMs || s.lastQueryMs
                                })
                        }["ThreeScene.useEffect.buildingsLoader"]);
                    }
                }["ThreeScene.useEffect.buildingsLoader"]
            });
            const roadsLoader = getLoader("roads", scene, {
                url: endpoints.roads,
                centerOffset: [
                    centerX,
                    centerZ
                ],
                layerType: "roads",
                onProgress: {
                    "ThreeScene.useEffect.roadsLoader": (meta)=>setStatus({
                            "ThreeScene.useEffect.roadsLoader": (s)=>({
                                    ...s,
                                    roads: meta.rendered || 0
                                })
                        }["ThreeScene.useEffect.roadsLoader"])
                }["ThreeScene.useEffect.roadsLoader"]
            });
            const waterLoader = getLoader("water", scene, {
                url: endpoints.water,
                centerOffset: [
                    centerX,
                    centerZ
                ],
                layerType: "rivers",
                onProgress: {
                    "ThreeScene.useEffect.waterLoader": (meta)=>setStatus({
                            "ThreeScene.useEffect.waterLoader": (s)=>({
                                    ...s,
                                    water: meta.rendered || 0
                                })
                        }["ThreeScene.useEffect.waterLoader"])
                }["ThreeScene.useEffect.waterLoader"]
            });
            const initialWeatherMode = settings.temperature ? "temperature" : settings.humidity ? "humidity" : "none";
            const weatherLoader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$three$2f$WeatherRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createWeatherLoader"])(scene, {
                url: `${envBase}/weather/area`,
                centerOffset: [
                    centerX,
                    centerZ
                ],
                minTemp: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$scene$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEATHER_CONFIG"].MIN_TEMP,
                maxTemp: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$scene$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEATHER_CONFIG"].MAX_TEMP,
                minHumidity: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$scene$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEATHER_CONFIG"].MIN_HUMIDITY,
                maxHumidity: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$scene$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEATHER_CONFIG"].MAX_HUMIDITY,
                tileSize: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$scene$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEATHER_CONFIG"].TILE_SIZE,
                elevationAboveGround: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$scene$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEATHER_CONFIG"].ELEVATION,
                opacity: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$scene$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEATHER_CONFIG"].OPACITY,
                mode: initialWeatherMode,
                step: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$scene$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEATHER_CONFIG"].STEP,
                onProgress: {
                    "ThreeScene.useEffect.weatherLoader": (meta)=>setStatus({
                            "ThreeScene.useEffect.weatherLoader": (s)=>({
                                    ...s,
                                    weather: meta.rendered || 0
                                })
                        }["ThreeScene.useEffect.weatherLoader"])
                }["ThreeScene.useEffect.weatherLoader"]
            });
            loadersRef.current.set("buildings", buildingsLoader);
            loadersRef.current.set("roads", roadsLoader);
            loadersRef.current.set("water", waterLoader);
            loadersRef.current.set("weather", weatherLoader);
            if (typeof settings.onLoadersReady === "function") {
                try {
                    settings.onLoadersReady({
                        buildings: buildingsLoader,
                        roads: roadsLoader,
                        water: waterLoader,
                        weather: weatherLoader
                    });
                } catch (e) {
                    console.warn("onLoadersReady callback failed:", e);
                }
            }
            const ground = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$scene$2f$sceneUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGround"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$scene$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GROUND_CONFIG"].SIZE, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$scene$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GROUND_CONFIG"].COLOR, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$scene$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GROUND_CONFIG"].Y_OFFSET);
            scene.add(ground);
            scene.background = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xe6eef5);
            groundRef.current = ground;
            const loop = {
                "ThreeScene.useEffect.loop": ()=>{
                    if (!cubeRef.current || !sceneRef.current) return;
                    cubeRef.current.rotation.y += 0.005;
                    lighting.updateDirectionalLight(camera.position);
                    if (groundRef.current) {
                        groundRef.current.position.x = camera.position.x;
                        groundRef.current.position.z = camera.position.z;
                    }
                    controls.update();
                    const rLoader = loadersRef.current.get("roads");
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$scene$2f$sceneUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateRoadVisibility"])(rLoader, camera, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$scene$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROAD_VISIBILITY"]);
                    const bLoader = loadersRef.current.get("buildings");
                    if (bLoader?.meshGroups) {
                        const buildingsEnabled = settings.buildings !== false;
                        const visible = buildingsEnabled && camera.position.y < __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$scene$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULTS"].HIDE_BUILDINGS_HEIGHT;
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$scene$2f$sceneUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLayerVisibility"])(bLoader.meshGroups, visible);
                    }
                    renderer.render(scene, camera);
                    frameRef.current = requestAnimationFrame(loop);
                }
            }["ThreeScene.useEffect.loop"];
            loop();
            async function updateChunks() {
                if (isLoadingRef.current) return;
                isLoadingRef.current = true;
                if (controllerRef.current) {
                    try {
                        controllerRef.current.abort();
                    } catch (e) {}
                }
                const controller = new AbortController();
                controllerRef.current = controller;
                try {
                    const tx = controls.target.x + centerX;
                    const tz = controls.target.z + centerZ;
                    const [lon, lat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$proj4$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$scene$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROJECTIONS"].WEB_MERCATOR, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$scene$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROJECTIONS"].WGS84, [
                        tx,
                        tz
                    ]);
                    const tileSize = settings.tileSize || __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$scene$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULTS"].TILE_SIZE;
                    const viewRadius = typeof settings.viewRadius === "number" ? settings.viewRadius : __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$scene$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULTS"].VIEW_RADIUS;
                    const { tilesToLoad, activeTiles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$scene$2f$sceneUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTilesToLoad"])(lon, lat, tileSize, viewRadius);
                    const shouldLoadWeather = settings.temperature || settings.humidity;
                    const batchPromises = tilesToLoad.map({
                        "ThreeScene.useEffect.updateChunks.batchPromises": (tile)=>{
                            const optsBase = {
                                signal: controller.signal,
                                useCache: true
                            };
                            const promises = [
                                buildingsLoader.loadChunk(tile.minLon, tile.minLat, tile.maxLon, tile.maxLat, {
                                    ...optsBase,
                                    simplify: 2.0,
                                    keyHint: `buildings_${tile.key}`
                                }),
                                roadsLoader.loadChunk(tile.minLon, tile.minLat, tile.maxLon, tile.maxLat, {
                                    ...optsBase,
                                    simplify: 0.5,
                                    keyHint: `roads_${tile.key}`
                                }),
                                waterLoader.loadChunk(tile.minLon, tile.minLat, tile.maxLon, tile.maxLat, {
                                    ...optsBase,
                                    simplify: 0.0,
                                    keyHint: `water_${tile.key}`
                                })
                            ];
                            if (shouldLoadWeather) {
                                promises.push(weatherLoader.loadChunk(tile.minLon, tile.minLat, tile.maxLon, tile.maxLat, {
                                    ...optsBase,
                                    keyHint: `weather_${tile.key}`
                                }));
                            }
                            return Promise.all(promises);
                        }
                    }["ThreeScene.useEffect.updateChunks.batchPromises"]);
                    await Promise.all(batchPromises);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$scene$2f$sceneUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cleanupUnusedChunks"])(buildingsLoader, "buildings", activeTiles);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$scene$2f$sceneUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cleanupUnusedChunks"])(roadsLoader, "roads", activeTiles);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$scene$2f$sceneUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cleanupUnusedChunks"])(waterLoader, "water", activeTiles);
                    if (shouldLoadWeather) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$scene$2f$sceneUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cleanupUnusedChunks"])(weatherLoader, "weather", activeTiles);
                } catch (e) {
                    if (e?.name !== "AbortError") console.error("[Scene] loadChunk error:", e);
                } finally{
                    isLoadingRef.current = false;
                }
            }
            const debouncedUpdate = {
                "ThreeScene.useEffect.debouncedUpdate": ()=>{
                    if (updateTimeoutRef.current) clearTimeout(updateTimeoutRef.current);
                    updateTimeoutRef.current = setTimeout(updateChunks, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$scene$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULTS"].UPDATE_DEBOUNCE);
                }
            }["ThreeScene.useEffect.debouncedUpdate"];
            controls.addEventListener("change", debouncedUpdate);
            updateChunks();
            const handleResize = {
                "ThreeScene.useEffect.handleResize": ()=>{
                    renderer.setSize(container.clientWidth, container.clientHeight);
                    camera.aspect = container.clientWidth / container.clientHeight;
                    camera.updateProjectionMatrix();
                }
            }["ThreeScene.useEffect.handleResize"];
            window.addEventListener("resize", handleResize);
            container.appendChild(renderer.domElement);
            // Cleanup
            return ({
                "ThreeScene.useEffect": ()=>{
                    cancelAnimationFrame(frameRef.current);
                    clearTimeout(updateTimeoutRef.current);
                    controls.removeEventListener("change", debouncedUpdate);
                    window.removeEventListener("resize", handleResize);
                    try {
                        cleanupRaycast();
                    } catch (e) {}
                    try {
                        controllerRef.current?.abort();
                    } catch (e) {}
                    for (const loader of loadersRef.current.values())loader.clearAll?.();
                    if (lighting) lighting.dispose();
                    try {
                        if (renderer.domElement && container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
                    } catch (e) {}
                    try {
                        renderer.dispose();
                    } catch (e) {}
                    try {
                        cube?.geometry.dispose();
                        cube?.material.dispose();
                    } catch (e) {}
                    try {
                        ground?.geometry.dispose();
                        ground?.material.dispose();
                    } catch (e) {}
                    rendererRef.current = null;
                    cameraRef.current = null;
                    controlsRef.current = null;
                    sceneRef.current = null;
                    lightingRef.current = null;
                    groundRef.current = null;
                }
            })["ThreeScene.useEffect"];
        }
    }["ThreeScene.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef,
            className: "w-full h-full"
        }, void 0, false, {
            fileName: "[project]/Projects/MAN_MVP/frontend/src/components/scene/ThreeScene.jsx",
            lineNumber: 424,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Projects/MAN_MVP/frontend/src/components/scene/ThreeScene.jsx",
        lineNumber: 423,
        columnNumber: 5
    }, this);
}
_s(ThreeScene, "Reyglr0bKcbcq7Vt+7uMJFROcGo=");
_c = ThreeScene;
var _c;
__turbopack_context__.k.register(_c, "ThreeScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/MAN_MVP/frontend/src/components/MapInterface.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/Projects/MAN_MVP/frontend/src/components/MapInterface.tsx'\n\nExpected '</', got 'jsx text (\n\n              )'");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
]);

//# sourceMappingURL=Projects_MAN_MVP_frontend_src_8580e4d9._.js.map