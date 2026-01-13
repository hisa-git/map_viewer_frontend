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
"[project]/Projects/MAN_MVP/frontend/src/components/OverlayInfo.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OverlayInfo",
    ()=>OverlayInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function OverlayInfo({ camera, loader }) {
    _s();
    const [info, setInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        camX: 0,
        camY: 0,
        camZ: 0,
        visibleBuildings: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OverlayInfo.useEffect": ()=>{
            let frame;
            const update = {
                "OverlayInfo.useEffect.update": ()=>{
                    setInfo({
                        camX: camera.position.x.toFixed(2),
                        camY: camera.position.y.toFixed(2),
                        camZ: camera.position.z.toFixed(2),
                        visibleBuildings: loader.meshGroups.size
                    });
                    frame = requestAnimationFrame(update);
                }
            }["OverlayInfo.useEffect.update"];
            update();
            return ({
                "OverlayInfo.useEffect": ()=>cancelAnimationFrame(frame)
            })["OverlayInfo.useEffect"];
        }
    }["OverlayInfo.useEffect"], [
        camera,
        loader
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "absolute",
            left: 12,
            top: 12,
            background: "rgba(0,0,0,0.6)",
            color: "white",
            padding: "8px 12px",
            fontSize: 13,
            borderRadius: 6,
            maxWidth: 300
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: "Camera:"
                    }, void 0, false, {
                        fileName: "[project]/Projects/MAN_MVP/frontend/src/components/OverlayInfo.jsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    " X: ",
                    info.camX,
                    ", Y: ",
                    info.camY,
                    ", Z: ",
                    info.camZ
                ]
            }, void 0, true, {
                fileName: "[project]/Projects/MAN_MVP/frontend/src/components/OverlayInfo.jsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                fileName: "[project]/Projects/MAN_MVP/frontend/src/components/OverlayInfo.jsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/MAN_MVP/frontend/src/components/OverlayInfo.jsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(OverlayInfo, "F9kaLDbS7l2Mbzzak9/SAILnJW4=");
_c = OverlayInfo;
var _c;
__turbopack_context__.k.register(_c, "OverlayInfo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/MAN_MVP/frontend/src/components/constants/temperaturecolors.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/Projects/MAN_MVP/frontend/src/components/constants/temperaturecolors.js'\n\nExpected ',', got ':'");
e.code = 'MODULE_UNPARSABLE';
throw e;
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
    "WeatherChunkLoader",
    ()=>WeatherChunkLoader,
    "WeatherRenderer",
    ()=>WeatherRenderer,
    "createWeatherLoader",
    ()=>createWeatherLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$constants$2f$temperaturecolors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/src/components/constants/temperaturecolors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$modules$2f$projection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/src/components/modules/projection.ts [app-client] (ecmascript)");
;
;
;
class WeatherRenderer {
    constructor(projectionHelpers, opts = {}){
        this.toLocal = projectionHelpers.toLocal;
        this.tileSizeX = opts.tileSizeX;
        this.tileSizeZ = opts.tileSizeZ;
        if (!this.tileSizeX || !this.tileSizeZ) {
            throw new Error("WeatherRenderer: tileSizeX and tileSizeZ must be provided");
        }
        this.elevationAboveGround = opts.elevationAboveGround ?? 20;
        this.mode = opts.mode ?? "temperature";
        this.minTemp = opts.minTemp ?? -30;
        this.maxTemp = opts.maxTemp ?? 40;
        this.minHumidity = opts.minHumidity ?? 0;
        this.maxHumidity = opts.maxHumidity ?? 100;
    }
    setMode(mode) {
        if (mode !== "temperature" && mode !== "humidity") return;
        this.mode = mode;
    }
    renderWeatherData(data) {
        if (!data?.points || !Array.isArray(data.points)) return [];
        const meshes = [];
        for (const p of data.points){
            const mesh = this._createTile(p);
            if (mesh) meshes.push(mesh);
        }
        return meshes;
    }
    _createTile({ lat, lon, temperature, humidity }) {
        if (typeof lat !== "number" || typeof lon !== "number") return null;
        const [x, z] = this.toLocal(lon, lat);
        let color;
        if (this.mode === "temperature" && typeof temperature === "number") {
            color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$constants$2f$temperaturecolors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tempToColor"])(temperature, this.minTemp, this.maxTemp);
        } else if (this.mode === "humidity" && typeof humidity === "number") {
            color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$constants$2f$temperaturecolors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["humidityToColor"])(humidity, this.minHumidity, this.maxHumidity);
        } else {
            color = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0x333333);
        }
        const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](this.tileSizeX, this.tileSizeZ);
        const material = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
            color,
            transparent: true,
            opacity: 0.9,
            side: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
        });
        const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geometry, material);
        mesh.rotation.x = -Math.PI / 2;
        mesh.position.set(x + this.tileSizeX / 2, this.elevationAboveGround, z + this.tileSizeZ / 2);
        mesh.userData = {
            type: "weather",
            lat,
            lon,
            temperature,
            humidity
        };
        return mesh;
    }
    updateMode(group, newMode) {
        this.setMode(newMode);
        group.traverse((obj)=>{
            if (obj.userData?.type !== "weather") return;
            const { temperature, humidity } = obj.userData;
            let color;
            if (newMode === "temperature") {
                color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$constants$2f$temperaturecolors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tempToColor"])(temperature, this.minTemp, this.maxTemp);
            } else {
                color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$constants$2f$temperaturecolors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["humidityToColor"])(humidity, this.minHumidity, this.maxHumidity);
            }
            obj.material.color.copy(color);
        });
    }
}
class WeatherChunkLoader {
    constructor(scene, opts = {}){
        this.scene = scene;
        this.loaded = new Map();
        this.meshGroups = new Map();
        this.step = opts.step ?? 0.05;
        this.centerOffset = opts.centerOffset ?? [
            0,
            0
        ];
        this.url = opts.url ?? `${"TURBOPACK compile-time value", "http://127.0.0.1:8000"}/weather/area`;
        const { sizeX, sizeZ } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$modules$2f$projection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeTileSizeFromStep"])(this.step);
        const projectionHelpers = {
            toLocal: (lon, lat)=>{
                const [x, z] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$modules$2f$projection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lonLatToWebMercator"])(lon, lat);
                return [
                    x - this.centerOffset[0],
                    z - this.centerOffset[1]
                ];
            }
        };
        this.renderer = new WeatherRenderer(projectionHelpers, {
            ...opts,
            tileSizeX: sizeX,
            tileSizeZ: sizeZ
        });
    }
    _chunkKey(minLon, minLat, maxLon, maxLat) {
        return `${minLon}_${minLat}_${maxLon}_${maxLat}`;
    }
    async loadChunk(minLon, minLat, maxLon, maxLat) {
        const key = this._chunkKey(minLon, minLat, maxLon, maxLat);
        if (this.loaded.has(key)) return;
        const params = new URLSearchParams({
            min_lat: minLat,
            max_lat: maxLat,
            min_lon: minLon,
            max_lon: maxLon,
            step: this.step
        });
        const res = await fetch(`${this.url}?${params}`);
        if (!res.ok) return;
        const data = await res.json();
        this.loaded.set(key, data);
        this._renderChunk(key, data);
    }
    _renderChunk(key, data) {
        if (this.meshGroups.has(key)) {
            this.removeChunk(key);
        }
        const group = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
        const meshes = this.renderer.renderWeatherData(data);
        for (const m of meshes)group.add(m);
        if (group.children.length > 0) {
            this.scene.add(group);
            this.meshGroups.set(key, group);
        }
    }
    removeChunk(key) {
        const group = this.meshGroups.get(key);
        if (!group) return;
        this.scene.remove(group);
        group.traverse((o)=>{
            o.geometry?.dispose();
            o.material?.dispose();
        });
        this.meshGroups.delete(key);
        this.loaded.delete(key);
    }
    clear() {
        for (const key of this.meshGroups.keys()){
            this.removeChunk(key);
        }
    }
}
function createWeatherLoader(scene, opts = {}) {
    return new WeatherChunkLoader(scene, opts);
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/MAN_MVP/frontend/src/components/ThreeScene.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$OverlayInfo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/src/components/OverlayInfo.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$three$2f$WeatherRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/src/components/three/WeatherRenderer.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$modules$2f$projection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/src/components/modules/projection.ts [app-client] (ecmascript)");
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
    const loadersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const wgs84 = "EPSG:4326";
    const webMercator = "EPSG:3857";
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
            const container = containerRef.current;
            if (!container) return;
            const envBase = ("TURBOPACK compile-time value", "http://127.0.0.1:8000") || "http://127.0.0.1:8000";
            const wgs84 = "EPSG:4326";
            const webMercator = "EPSG:3857";
            const startLon = parseFloat(("TURBOPACK compile-time value", "32.000757") || "0");
            const startLat = parseFloat(("TURBOPACK compile-time value", "47.015347") || "0");
            const [centerX, centerZ] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$proj4$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(wgs84, webMercator, [
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
            const camera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$three$2f$Camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCamera"])(container.clientWidth, container.clientHeight);
            camera.fov = 60;
            camera.updateProjectionMatrix();
            cameraRef.current = camera;
            const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$three$2f$Controls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createControls"])(camera, renderer.domElement);
            controlsRef.current = controls;
            const { scene, cube } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$three$2f$Scene$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createScene"])();
            sceneRef.current = scene;
            cubeRef.current = cube;
            scene.background = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xbfd9ff);
            const dirLight = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DirectionalLight"](0xffffff, 1.0);
            dirLight.position.set(1000, 2000, 1000);
            scene.add(dirLight);
            const ambLight = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmbientLight"](0x666666, 0.8);
            scene.add(ambLight);
            const cleanupRaycast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$three$2f$Raycast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupRaycast"])(renderer.domElement, camera, scene, controls, container);
            camera.position.set(0, 800, 800);
            camera.lookAt(0, 0, 0);
            controls.target.set(0, 0, 0);
            controls.update();
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
            const weatherLoader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$three$2f$WeatherRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createWeatherLoader"])(scene, {
                url: `${envBase}/weather/area`,
                centerOffset: [
                    centerX,
                    centerZ
                ],
                minTemp: -20,
                maxTemp: 40,
                minHumidity: 0,
                maxHumidity: 100,
                tileSize: 50,
                elevationAboveGround: 0.2,
                opacity: 0.7,
                mode: "temperature",
                step: 0.05,
                onProgress: {
                    "ThreeScene.useEffect.weatherLoader": (meta)=>setStatus({
                            "ThreeScene.useEffect.weatherLoader": (s)=>({
                                    ...s,
                                    weather: meta.rendered || 0
                                })
                        }["ThreeScene.useEffect.weatherLoader"])
                }["ThreeScene.useEffect.weatherLoader"]
            });
            loadersRef.current.set("weather", weatherLoader);
            const loadWeather = {
                "ThreeScene.useEffect.loadWeather": async ()=>{
                    const minLon = startLon - 0.1;
                    const minLat = startLat - 0.1;
                    const maxLon = startLon + 0.1;
                    const maxLat = startLat + 0.1;
                    try {
                        await weatherLoader.loadChunk(minLon, minLat, maxLon, maxLat);
                    } catch (e) {
                        console.error("Initial weather load failed:", e);
                    }
                }
            }["ThreeScene.useEffect.loadWeather"];
            loadWeather();
            loadersRef.current.set("buildings", buildingsLoader);
            loadersRef.current.set("roads", roadsLoader);
            loadersRef.current.set("water", waterLoader);
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
            const groundGeom = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](500000, 500000, 1, 1);
            const groundMat = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color: 0xf0f0f0,
                roughness: 1,
                metalness: 0
            });
            const ground = new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](groundGeom, groundMat);
            ground.rotation.x = -Math.PI / 2;
            ground.position.y = -0.5;
            ground.receiveShadow = true;
            scene.add(ground);
            const loop = {
                "ThreeScene.useEffect.loop": ()=>{
                    if (!cubeRef.current || !sceneRef.current) return;
                    cubeRef.current.rotation.y += 0.005;
                    dirLight.position.set(camera.position.x, 2000, camera.position.z);
                    ground.position.x = camera.position.x;
                    ground.position.z = camera.position.z;
                    controls.update();
                    const rLoader = loadersRef.current.get("roads");
                    if (rLoader?.meshGroups) {
                        for (const group of rLoader.meshGroups.values()){
                            group.traverse({
                                "ThreeScene.useEffect.loop": (obj)=>{
                                    if (!obj.isLine) return;
                                    const t = obj.userData.roadType || "unknown";
                                    const dist = camera.position.distanceTo(obj.position);
                                    if ([
                                        "motorway",
                                        "trunk",
                                        "primary"
                                    ].includes(t)) {
                                        const k = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].clamp(2000 / dist, 0.4, 2.5);
                                        obj.material.color.setScalar(0.4 + k * 0.6);
                                        obj.scale.set(k, k, k);
                                        obj.visible = true;
                                    } else if ([
                                        "footway",
                                        "path",
                                        "service"
                                    ].includes(t)) {
                                        const hideDist = 800;
                                        obj.visible = dist < hideDist;
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
                                }
                            }["ThreeScene.useEffect.loop"]);
                        }
                    }
                    const hideBuildingsHeight = 15000;
                    const bLoader = loadersRef.current.get("buildings");
                    if (bLoader?.meshGroups) {
                        const visible = camera.position.y < hideBuildingsHeight;
                        for (const group of bLoader.meshGroups.values())group.visible = visible;
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
                    const [lon, lat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$proj4$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(webMercator, wgs84, [
                        tx,
                        tz
                    ]);
                    const tileSize = settings.tileSize || 0.05;
                    const viewRadius = typeof settings.viewRadius === "number" ? settings.viewRadius : 5;
                    const centerTileX = Math.floor(lon / tileSize);
                    const centerTileY = Math.floor(lat / tileSize);
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
                    const batchPromises = tilesToLoad.map({
                        "ThreeScene.useEffect.updateChunks.batchPromises": (tile)=>{
                            const optsBase = {
                                signal: controller.signal,
                                useCache: true,
                                keyHint: tile.key
                            };
                            return Promise.all([
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
                                }),
                                weatherLoader.loadChunk(tile.minLon, tile.minLat, tile.maxLon, tile.maxLat, {
                                    ...optsBase,
                                    keyHint: `weather_${tile.key}`
                                })
                            ]);
                        }
                    }["ThreeScene.useEffect.updateChunks.batchPromises"]);
                    await Promise.all(batchPromises);
                    const cleanupUnused = {
                        "ThreeScene.useEffect.updateChunks.cleanupUnused": (loader, layerName)=>{
                            if (!loader?.meshGroups) return;
                            for (const key of loader.meshGroups.keys()){
                                const re = new RegExp(`^${layerName}_(-?\\d+)_(-?\\d+)$`);
                                const match = key.match(re);
                                if (match && !activeTiles.has(`${match[1]}_${match[2]}`)) {
                                    loader.removeChunk?.(key);
                                }
                            }
                        }
                    }["ThreeScene.useEffect.updateChunks.cleanupUnused"];
                    cleanupUnused(buildingsLoader, "buildings");
                    cleanupUnused(roadsLoader, "roads");
                    cleanupUnused(waterLoader, "water");
                    cleanupUnused(weatherLoader, "weather");
                } catch (e) {
                    if (e?.name !== "AbortError") console.error("[Scene] loadChunk error:", e);
                } finally{
                    isLoadingRef.current = false;
                }
            }
            const debouncedUpdate = {
                "ThreeScene.useEffect.debouncedUpdate": ()=>{
                    if (updateTimeoutRef.current) clearTimeout(updateTimeoutRef.current);
                    updateTimeoutRef.current = setTimeout(updateChunks, 250);
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
                        groundGeom.dispose();
                        groundMat.dispose();
                    } catch (e) {}
                    rendererRef.current = null;
                    cameraRef.current = null;
                    controlsRef.current = null;
                    sceneRef.current = null;
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
            fileName: "[project]/Projects/MAN_MVP/frontend/src/components/ThreeScene.jsx",
            lineNumber: 408,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Projects/MAN_MVP/frontend/src/components/ThreeScene.jsx",
        lineNumber: 407,
        columnNumber: 5
    }, this);
}
_s(ThreeScene, "zAckr+bG4U8P5jvA74sZS9I80IQ=");
_c = ThreeScene;
var _c;
__turbopack_context__.k.register(_c, "ThreeScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/MAN_MVP/frontend/src/components/MapInterface.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MapInterface
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$ui$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/src/components/ui/slider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/src/components/ui/switch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/src/components/ui/tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$ThreeScene$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/MAN_MVP/frontend/src/components/ThreeScene.jsx [app-client] (ecmascript)");
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
function ConsolePanel({ logs }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-neutral-950 border border-neutral-800 rounded-md p-2 text-xs font-mono text-emerald-400 h-48 overflow-y-auto",
        children: logs.map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: l
            }, i, false, {
                fileName: "[project]/Projects/MAN_MVP/frontend/src/components/MapInterface.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Projects/MAN_MVP/frontend/src/components/MapInterface.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = ConsolePanel;
function MapInterface() {
    _s();
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        zoom: 5,
        buildings: true,
        traffic: false,
        weather: false,
        labels: true,
        terrain: false,
        nightMode: false
    });
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("settings");
    const [showDetails, setShowDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapInterface.useEffect": ()=>{
            const original = console.log;
            console.log = ({
                "MapInterface.useEffect": (...args)=>{
                    setLogs({
                        "MapInterface.useEffect": (prev)=>[
                                ...prev.slice(-99),
                                args.join(" ")
                            ]
                    }["MapInterface.useEffect"]);
                    original(...args);
                }
            })["MapInterface.useEffect"];
            return ({
                "MapInterface.useEffect": ()=>{
                    console.log = original;
                }
            })["MapInterface.useEffect"];
        }
    }["MapInterface.useEffect"], []);
    const update = (key, value)=>{
        setSettings((s)=>({
                ...s,
                [key]: value
            }));
        console.log(`${key} → ${value}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full bg-neutral-950 text-neutral-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "w-72 border-r border-neutral-800 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-3 border-b border-neutral-800 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                className: "w-5 h-5 text-sky-400"
                            }, void 0, false, {
                                fileName: "[project]/Projects/MAN_MVP/frontend/src/components/MapInterface.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold",
                                children: "Керування картою"
                            }, void 0, false, {
                                fileName: "[project]/Projects/MAN_MVP/frontend/src/components/MapInterface.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Projects/MAN_MVP/frontend/src/components/MapInterface.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
                        value: activeTab,
                        onValueChange: setActiveTab,
                        className: "flex-1 flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                                className: "grid grid-cols-2 m-3 bg-neutral-900",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "settings",
                                        children: "Налаштування"
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/MAN_MVP/frontend/src/components/MapInterface.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "info",
                                        children: "Інфо"
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/MAN_MVP/frontend/src/components/MapInterface.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Projects/MAN_MVP/frontend/src/components/MapInterface.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                value: "settings",
                                className: "px-4 space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-neutral-400 mb-2",
                                                children: "Масштаб"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/MAN_MVP/frontend/src/components/MapInterface.tsx",
                                                lineNumber: 76,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$ui$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                                min: 1,
                                                max: 10,
                                                value: [
                                                    settings.zoom
                                                ],
                                                onValueChange: ([v])=>update("zoom", v)
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/MAN_MVP/frontend/src/components/MapInterface.tsx",
                                                lineNumber: 77,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/MAN_MVP/frontend/src/components/MapInterface.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            [
                                                "buildings",
                                                "Будівлі"
                                            ],
                                            [
                                                "traffic",
                                                "Трафік"
                                            ],
                                            [
                                                "weather",
                                                "Погода"
                                            ],
                                            [
                                                "labels",
                                                "Позначки"
                                            ],
                                            [
                                                "terrain",
                                                "Рельєф"
                                            ],
                                            [
                                                "nightMode",
                                                "Нічний режим"
                                            ]
                                        ].map(([key, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-neutral-200",
                                                        children: label
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/MAN_MVP/frontend/src/components/MapInterface.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                                        checked: settings[key],
                                                        onCheckedChange: (v)=>update(key, v)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/MAN_MVP/frontend/src/components/MapInterface.tsx",
                                                        lineNumber: 96,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, key, true, {
                                                fileName: "[project]/Projects/MAN_MVP/frontend/src/components/MapInterface.tsx",
                                                lineNumber: 94,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/MAN_MVP/frontend/src/components/MapInterface.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Projects/MAN_MVP/frontend/src/components/MapInterface.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                value: "info",
                                className: "px-4 space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-neutral-300 leading-relaxed",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Поточний стан сцени:"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/MAN_MVP/frontend/src/components/MapInterface.tsx",
                                                lineNumber: 107,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "mt-2 space-y-1 text-neutral-400",
                                                children: Object.entries(settings).map(([k, v])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            k,
                                                            ": ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-neutral-200",
                                                                children: String(v)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/MAN_MVP/frontend/src/components/MapInterface.tsx",
                                                                lineNumber: 111,
                                                                columnNumber: 26
                                                            }, this)
                                                        ]
                                                    }, k, true, {
                                                        fileName: "[project]/Projects/MAN_MVP/frontend/src/components/MapInterface.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/MAN_MVP/frontend/src/components/MapInterface.tsx",
                                                lineNumber: 108,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/MAN_MVP/frontend/src/components/MapInterface.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ConsolePanel, {
                                        logs: logs
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/MAN_MVP/frontend/src/components/MapInterface.tsx",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Projects/MAN_MVP/frontend/src/components/MapInterface.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Projects/MAN_MVP/frontend/src/components/MapInterface.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Projects/MAN_MVP/frontend/src/components/MapInterface.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$ThreeScene$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        settings: settings
                    }, void 0, false, {
                        fileName: "[project]/Projects/MAN_MVP/frontend/src/components/MapInterface.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: showDetails && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                x: 320
                            },
                            animate: {
                                x: 0
                            },
                            exit: {
                                x: 320
                            },
                            className: "absolute right-0 top-0 w-80 h-full bg-neutral-900 border-l border-neutral-800 p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold",
                                            children: "Деталі"
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/MAN_MVP/frontend/src/components/MapInterface.tsx",
                                            lineNumber: 135,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "ghost",
                                            size: "icon",
                                            onClick: ()=>setShowDetails(false),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {}, void 0, false, {
                                                fileName: "[project]/Projects/MAN_MVP/frontend/src/components/MapInterface.tsx",
                                                lineNumber: 141,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/MAN_MVP/frontend/src/components/MapInterface.tsx",
                                            lineNumber: 136,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projects/MAN_MVP/frontend/src/components/MapInterface.tsx",
                                    lineNumber: 134,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$MAN_MVP$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ConsolePanel, {
                                    logs: logs
                                }, void 0, false, {
                                    fileName: "[project]/Projects/MAN_MVP/frontend/src/components/MapInterface.tsx",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projects/MAN_MVP/frontend/src/components/MapInterface.tsx",
                            lineNumber: 128,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Projects/MAN_MVP/frontend/src/components/MapInterface.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Projects/MAN_MVP/frontend/src/components/MapInterface.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/MAN_MVP/frontend/src/components/MapInterface.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_s(MapInterface, "9PVg8WmSKypuRwiRN0kx1ibwzrA=");
_c1 = MapInterface;
var _c, _c1;
__turbopack_context__.k.register(_c, "ConsolePanel");
__turbopack_context__.k.register(_c1, "MapInterface");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Projects_MAN_MVP_frontend_src_ea352dd4._.js.map