(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
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
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
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
"[project]/src/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/three/GeometryRenderers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BuildingsRenderer",
    ()=>BuildingsRenderer,
    "DEFAULTS",
    ()=>DEFAULTS,
    "LayerRenderer",
    ()=>LayerRenderer,
    "RENDERERS",
    ()=>RENDERERS,
    "RiversRenderer",
    ()=>RiversRenderer,
    "RoadsRenderer",
    ()=>RoadsRenderer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$proj4$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/proj4/lib/index.js [app-client] (ecmascript)");
;
;
;
const WGS84 = "EPSG:4326";
const WEB_MERCATOR = "EPSG:3857";
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
class LayerRenderer {
    constructor(centerOffset = [
        0,
        0
    ]){
        this.centerOffset = centerOffset;
    }
    setCenterOffset(offset) {
        this.centerOffset = offset;
    }
    setCenterFromLonLat(lon, lat) {
        const [x, z] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$proj4$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("EPSG:4326", "EPSG:3857", [
            lon,
            lat
        ]);
        this.centerOffset = [
            x,
            z
        ];
    }
    toLocal(lon, lat) {
        const [x0, z0] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$proj4$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(WGS84, WEB_MERCATOR, [
            lon,
            lat
        ]);
        return [
            x0 - this.centerOffset[0],
            z0 - this.centerOffset[1]
        ];
    }
    renderFeature() {
        throw new Error("renderFeature must be implemented");
    }
}
class PolygonRendererBase extends LayerRenderer {
    _ensureClosed(ring) {
        if (!Array.isArray(ring) || ring.length < 3) return null;
        const f = ring[0];
        const l = ring[ring.length - 1];
        return f[0] === l[0] && f[1] === l[1] ? ring : [
            ...ring,
            f
        ];
    }
    _coordsToShape(coords) {
        if (!Array.isArray(coords) || coords.length === 0) return null;
        const outer = this._ensureClosed(coords[0]);
        if (!outer) return null;
        const shape = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shape"]();
        outer.forEach(([lon, lat], i)=>{
            const [x, z] = this.toLocal(lon, lat);
            if (!Number.isFinite(x) || !Number.isFinite(z)) return;
            i === 0 ? shape.moveTo(x, z) : shape.lineTo(x, z);
        });
        for(let i = 1; i < coords.length; i++){
            const hole = this._ensureClosed(coords[i]);
            if (!hole) continue;
            const path = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Path"]();
            hole.forEach(([lon, lat], j)=>{
                const [x, z] = this.toLocal(lon, lat);
                if (!Number.isFinite(x) || !Number.isFinite(z)) return;
                j === 0 ? path.moveTo(x, z) : path.lineTo(x, z);
            });
            shape.holes.push(path);
        }
        return shape;
    }
}
class BuildingsRenderer extends PolygonRendererBase {
    renderFeature({ geometry, properties = {} }) {
        if (!geometry) return [];
        const height = Number(properties.height) || DEFAULTS.buildingHeight;
        const meshes = [];
        const build = (coords)=>{
            const shape = this._coordsToShape(coords);
            if (!shape) return;
            const g = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExtrudeGeometry"](shape, {
                depth: height,
                bevelEnabled: false
            });
            g.rotateX(-Math.PI / 2);
            g.computeBoundingBox();
            g.computeBoundingSphere();
            const m = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](g, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color: 0xcccccc,
                roughness: 0.8,
                metalness: 0.2
            }));
            m.castShadow = true;
            m.receiveShadow = true;
            meshes.push(m);
        };
        geometry.type === "Polygon" ? build(geometry.coordinates) : geometry.coordinates.forEach(build);
        return meshes;
    }
}
class RiversRenderer extends PolygonRendererBase {
    renderFeature({ geometry }) {
        if (!geometry) return [];
        const meshes = [];
        const build = (coords)=>{
            const shape = this._coordsToShape(coords);
            if (!shape) return;
            const g = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShapeGeometry"](shape);
            g.rotateX(-Math.PI / 2);
            g.computeBoundingBox();
            g.computeBoundingSphere();
            const m = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](g, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color: 0xaaddff,
                roughness: 0.6,
                metalness: 0.1,
                side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
            }));
            m.receiveShadow = true;
            meshes.push(m);
        };
        geometry.type === "Polygon" ? build(geometry.coordinates) : geometry.coordinates.forEach(build);
        return meshes;
    }
}
class RoadsRenderer extends LayerRenderer {
    renderFeature({ geometry, properties = {} }) {
        if (!geometry) return [];
        const meshes = [];
        const handle = (coords)=>{
            const m = this._lineToMesh(coords, properties);
            if (m) meshes.push(m);
        };
        geometry.type === "LineString" ? handle(geometry.coordinates) : geometry.coordinates.forEach(handle);
        return meshes;
    }
    _resolveRoadType(props) {
        return props?.fclass || props?.highway || props?.type || "residential";
    }
    _lineToMesh(coords, props) {
        if (!Array.isArray(coords) || coords.length < 2) return null;
        const type = this._resolveRoadType(props);
        const width = DEFAULTS.roadWidths[type] ?? 5;
        if (!Number.isFinite(width)) return null;
        const y = DEFAULTS.roadY;
        const pts = [];
        for (const [lon, lat] of coords){
            const [x, z] = this.toLocal(lon, lat);
            if (!Number.isFinite(x) || !Number.isFinite(z)) continue;
            pts.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](x, y, z));
        }
        if (pts.length < 2) return null;
        const positions = [];
        const indices = [];
        for(let i = 0; i < pts.length - 1; i++){
            const a = pts[i];
            const b = pts[i + 1];
            const dir = b.clone().sub(a);
            if (dir.lengthSq() === 0) continue;
            dir.normalize();
            const perp = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-dir.z, 0, dir.x).multiplyScalar(width / 2);
            const base = positions.length / 3;
            [
                a.clone().add(perp),
                a.clone().sub(perp),
                b.clone().add(perp),
                b.clone().sub(perp)
            ].forEach((v)=>positions.push(v.x, v.y, v.z));
            indices.push(base, base + 1, base + 2, base + 1, base + 3, base + 2);
        }
        if (!positions.length) return null;
        const g = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
        g.setAttribute("position", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Float32BufferAttribute"](positions, 3));
        g.setIndex(indices);
        g.computeVertexNormals();
        g.computeBoundingBox();
        g.computeBoundingSphere();
        const m = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](g, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            color: DEFAULTS.roadColors[type] ?? 0xdddddd,
            roughness: 1,
            metalness: 0,
            polygonOffset: true,
            polygonOffsetFactor: -3,
            polygonOffsetUnits: -3,
            side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
        }));
        m.rotation.x = -Math.PI;
        m.frustumCulled = false;
        return m;
    }
}
const RENDERERS = {
    buildings: BuildingsRenderer,
    roads: RoadsRenderer,
    rivers: RiversRenderer
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/three/ChunkLoader.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChunkLoader",
    ()=>ChunkLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$GeometryRenderers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/three/GeometryRenderers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$proj4$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/proj4/lib/index.js [app-client] (ecmascript)");
;
;
;
const clamp = (v, a, b)=>Math.max(a, Math.min(b, v));
class ChunkLoader {
    constructor(scene, opts = {}){
        this.scene = scene;
        this.loaded = new Map();
        this.meshGroups = new Map();
        this.url = opts.url ?? "http://localhost:8000/chunk";
        this.centerOffset = opts.centerOffset ?? [
            0,
            0
        ];
        this.onProgress = opts.onProgress ?? (()=>{});
        this.layerType = opts.layerType ?? "buildings";
        const Renderer = opts.customRenderer ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$GeometryRenderers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RENDERERS"][this.layerType];
        this.renderer = new Renderer(this.centerOffset);
    }
    clampLatLon(lon, lat) {
        return [
            clamp(lon, -180, 180),
            clamp(lat, -85.0511, 85.0511)
        ];
    }
    async loadChunk(minLon, minLat, maxLon, maxLat) {
        const [minx, miny] = this.clampLatLon(minLon, minLat);
        const [maxx, maxy] = this.clampLatLon(maxLon, maxLat);
        const key = `${minx}_${miny}_${maxx}_${maxy}`;
        if (this.loaded.has(key)) return;
        const qs = new URLSearchParams({
            minx,
            miny,
            maxx,
            maxy
        });
        const r = await fetch(`${this.url}?${qs}`);
        const data = await r.json();
        const cx = (minx + maxx) / 2;
        const cy = (miny + maxy) / 2;
        this.renderer.setCenterFromLonLat(cx, cy);
        const [ox, oz] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$proj4$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("EPSG:4326", "EPSG:3857", [
            cx,
            cy
        ]);
        this.renderer.centerOffset = [
            ox,
            oz
        ];
        this._renderData(data, key);
        this.loaded.set(key, data);
    }
    _renderData(data, key) {
        const group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
        let count = 0;
        for (const f of data.features ?? []){
            const meshes = this.renderer.renderFeature(f);
            for (const m of meshes){
                group.add(m);
                count++;
            }
        }
        if (count) {
            this.scene.add(group);
            this.meshGroups.set(key, group);
        }
    }
    removeChunk(key) {
        const g = this.meshGroups.get(key);
        if (!g) return;
        this.scene.remove(g);
        g.traverse((o)=>{
            o.geometry?.dispose();
            o.material?.dispose();
        });
        this.meshGroups.delete(key);
        this.loaded.delete(key);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/three/Renderer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createRenderer",
    ()=>createRenderer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
;
function createRenderer(container) {
    const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
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
"[project]/src/components/three/Camera.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCamera",
    ()=>createCamera
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
function createCamera(width, height) {
    const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](0.1, width / height, 120, 100000000);
    camera.position.set(0, 10, 10);
    camera.lookAt(0, 0, 0);
    return camera;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/three/Materials.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildingMaterial",
    ()=>buildingMaterial,
    "planeMaterial",
    ()=>planeMaterial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
const buildingMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
    color: 0x66ccff
});
const planeMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
    color: 0xa5d6a7
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/three/Scene.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createScene",
    ()=>createScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$Materials$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/three/Materials.js [app-client] (ecmascript)");
;
;
function createScene() {
    const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
    const cube = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$Materials$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildingMaterial"]);
    scene.add(cube);
    const light = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DirectionalLight"](0xffffff, 1);
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
"[project]/src/components/three/Controls.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createControls",
    ()=>createControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$controls$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/controls/OrbitControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
;
function createControls(camera, domElement) {
    const controls = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$controls$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"](camera, domElement);
    controls.enablePan = true;
    controls.enableZoom = true;
    controls.enableRotate = true;
    controls.mouseButtons = {
        LEFT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOUSE"].PAN,
        MIDDLE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOUSE"].DOLLY,
        RIGHT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOUSE"].ROTATE
    };
    controls.panSpeed = 1;
    controls.rotateSpeed = 0.2;
    controls.zoomSpeed = 1.5;
    controls.minPolarAngle = 0.1;
    controls.maxPolarAngle = Math.PI / 2;
    controls.addEventListener("wheel", (event)=>{
        const delta = event.deltaY * 0.01;
        camera.position.addScaledVector(camera.getWorldDirection(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]()), delta);
        event.preventDefault();
    });
    return controls;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/three/Raycast.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setupRaycast",
    ()=>setupRaycast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
function setupRaycast(dom, camera, scene, controls, container) {
    const raycaster = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Raycaster"]();
    const mouse = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"]();
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
"[project]/src/components/OverlayInfo.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OverlayInfo",
    ()=>OverlayInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function OverlayInfo({ camera, loader }) {
    _s();
    const [info, setInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        camX: 0,
        camY: 0,
        camZ: 0,
        visibleBuildings: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: "Camera:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/OverlayInfo.jsx",
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
                fileName: "[project]/src/components/OverlayInfo.jsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                fileName: "[project]/src/components/OverlayInfo.jsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/OverlayInfo.jsx",
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
"[project]/src/components/ThreeScene.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThreeScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$proj4$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/proj4/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$ChunkLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/three/ChunkLoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/three/Renderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$Camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/three/Camera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$Scene$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/three/Scene.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$Controls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/three/Controls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$Raycast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/three/Raycast.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OverlayInfo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/OverlayInfo.jsx [app-client] (ecmascript)");
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
function ThreeScene({ settings = {} }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cameraRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rendererRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const controlsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sceneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cubeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const frameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const updateTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const controllerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isLoadingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const loadersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const wgs84 = "EPSG:4326";
    const webMercator = "EPSG:3857";
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        chunks: 0,
        meshes: 0,
        features: 0,
        lastQueryMs: 0,
        buildings: 0,
        roads: 0,
        water: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThreeScene.useEffect": ()=>{
            const container = containerRef.current;
            if (!container) return;
            const envBase = ("TURBOPACK compile-time value", "http://localhost:8000") || "http://127.0.0.1:8000";
            const wgs84 = "EPSG:4326";
            const webMercator = "EPSG:3857";
            const startLon = parseFloat(("TURBOPACK compile-time value", "32.000757") || "0");
            const startLat = parseFloat(("TURBOPACK compile-time value", "47.015347") || "0");
            const [centerX, centerZ] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$proj4$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(wgs84, webMercator, [
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
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$ChunkLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChunkLoader"](scene, opts);
                }
            }["ThreeScene.useEffect.getLoader"];
            const renderer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRenderer"])(container);
            rendererRef.current = renderer;
            const camera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$Camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCamera"])(container.clientWidth, container.clientHeight);
            camera.fov = 60;
            camera.updateProjectionMatrix();
            cameraRef.current = camera;
            const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$Controls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createControls"])(camera, renderer.domElement);
            controlsRef.current = controls;
            const { scene, cube } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$Scene$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createScene"])();
            sceneRef.current = scene;
            cubeRef.current = cube;
            scene.background = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xbfd9ff);
            const dirLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DirectionalLight"](0xffffff, 1.0);
            dirLight.position.set(1000, 2000, 1000);
            scene.add(dirLight);
            const ambLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmbientLight"](0x666666, 0.8);
            scene.add(ambLight);
            const cleanupRaycast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$Raycast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupRaycast"])(renderer.domElement, camera, scene, controls, container);
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
            // Weather loader
            const loadWeather = {
                "ThreeScene.useEffect.loadWeather": async ()=>{
                    if (typeof createWeatherLoader !== "function") return;
                    const weatherLoader = createWeatherLoader(scene, {
                        url: `${envBase}/weather/area`,
                        centerOffset: [
                            centerX,
                            centerZ
                        ],
                        minTemp: -20,
                        maxTemp: 40,
                        barRadius: 10,
                        heightScale: 2
                    });
                    // Пример области, можно заменить на реальные координаты
                    const minLon = startLon - 0.1;
                    const minLat = startLat - 0.1;
                    const maxLon = startLon + 0.1;
                    const maxLat = startLat + 0.1;
                    await weatherLoader.loadChunk(minLon, minLat, maxLon, maxLat);
                    loadersRef.current.set("weather", weatherLoader);
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
                        water: waterLoader
                    });
                } catch (e) {
                    console.warn("onLoadersReady callback failed:", e);
                }
            }
            const groundGeom = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](500000, 500000, 1, 1);
            const groundMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color: 0xf0f0f0,
                roughness: 1,
                metalness: 0
            });
            const ground = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](groundGeom, groundMat);
            ground.rotation.x = -Math.PI / 2;
            ground.position.y = -0.5;
            ground.receiveShadow = true;
            scene.add(ground);
            const loop = {
                "ThreeScene.useEffect.loop": ()=>{
                    if (!cubeRef.current || !sceneRef.current) return;
                    cubeRef.current.rotation.y += 0.005;
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
                                        const k = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].clamp(2000 / dist, 0.4, 2.5);
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
                                            const k = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].clamp(900 / dist, 0.2, 1.0);
                                            obj.material.color.setScalar(0.25 + k * 0.3);
                                            obj.scale.set(k, k, k);
                                        }
                                    } else {
                                        const k = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].clamp(1200 / dist, 0.3, 1.3);
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
                    const [lon, lat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$proj4$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(webMercator, wgs84, [
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
                                (loadersRef.current.get("buildings") || buildingsLoader).loadChunk(tile.minLon, tile.minLat, tile.maxLon, tile.maxLat, {
                                    ...optsBase,
                                    simplify: 2.0,
                                    keyHint: `buildings_${tile.key}`
                                }),
                                (loadersRef.current.get("roads") || roadsLoader).loadChunk(tile.minLon, tile.minLat, tile.maxLon, tile.maxLat, {
                                    ...optsBase,
                                    simplify: 0.5,
                                    keyHint: `roads_${tile.key}`
                                }),
                                (loadersRef.current.get("water") || waterLoader).loadChunk(tile.minLon, tile.minLat, tile.maxLon, tile.maxLat, {
                                    ...optsBase,
                                    simplify: 0.0,
                                    keyHint: `water_${tile.key}`
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef,
            className: "w-full h-full"
        }, void 0, false, {
            fileName: "[project]/src/components/ThreeScene.jsx",
            lineNumber: 386,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ThreeScene.jsx",
        lineNumber: 385,
        columnNumber: 5
    }, this);
}
_s(ThreeScene, "q/RcVLjW/JDqiJjpGGaGMZ5n3dg=");
_c = ThreeScene;
var _c;
__turbopack_context__.k.register(_c, "ThreeScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/MapInterface.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MapInterface
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThreeScene$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ThreeScene.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ConsolePanel({ logs }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-black text-green-400 font-mono text-xs p-2 h-full overflow-y-auto rounded-lg",
        children: logs.map((log, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: log
            }, i, false, {
                fileName: "[project]/src/components/MapInterface.tsx",
                lineNumber: 13,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/MapInterface.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = ConsolePanel;
function MapInterface() {
    _s();
    const [isRightOpen, setIsRightOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        zoom: 1,
        buildings: true,
        traffic: false,
        weather: false,
        labels: true
    });
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapInterface.useEffect": ()=>{
            const originalLog = console.log;
            console.log = ({
                "MapInterface.useEffect": (...args)=>{
                    setLogs({
                        "MapInterface.useEffect": (prev)=>{
                            const newLogs = [
                                ...prev,
                                args.map({
                                    "MapInterface.useEffect": (a)=>String(a)
                                }["MapInterface.useEffect"]).join(" ")
                            ];
                            return newLogs.slice(-100);
                        }
                    }["MapInterface.useEffect"]);
                    originalLog(...args);
                }
            })["MapInterface.useEffect"];
            return ({
                "MapInterface.useEffect": ()=>{
                    console.log = originalLog;
                }
            })["MapInterface.useEffect"];
        }
    }["MapInterface.useEffect"], []);
    const handleChange = (key, value)=>{
        setSettings({
            ...settings,
            [key]: value
        });
        console.log(`Змінено ${key}: ${value}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full flex overflow-hidden bg-neutral-900 text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-64 bg-neutral-800 p-4 border-r border-neutral-700 flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold",
                        children: "Налаштування"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MapInterface.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "rounded-2xl shadow-sm bg-neutral-900 border border-neutral-600",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "p-4 flex flex-col gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex flex-col gap-1 text-sm text-white",
                                    children: [
                                        "Масштаб",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "range",
                                            min: "1",
                                            max: "10",
                                            value: settings.zoom,
                                            onChange: (e)=>handleChange("zoom", e.target.value),
                                            className: "w-full"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MapInterface.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MapInterface.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex gap-2 text-sm items-center text-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: settings.buildings,
                                            onChange: (e)=>handleChange("buildings", e.target.checked)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MapInterface.tsx",
                                            lineNumber: 70,
                                            columnNumber: 15
                                        }, this),
                                        "Будівлі"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MapInterface.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex gap-2 text-sm items-center text-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: settings.traffic,
                                            onChange: (e)=>handleChange("traffic", e.target.checked)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MapInterface.tsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this),
                                        "Трафік"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MapInterface.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex gap-2 text-sm items-center text-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: settings.weather,
                                            onChange: (e)=>handleChange("weather", e.target.checked)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MapInterface.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this),
                                        "Погода"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MapInterface.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex gap-2 text-sm items-center text-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: settings.labels,
                                            onChange: (e)=>handleChange("labels", e.target.checked)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MapInterface.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this),
                                        "Позначки"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MapInterface.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MapInterface.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MapInterface.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>setIsRightOpen(true),
                        className: "rounded-2xl text-white",
                        children: "Інформація"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MapInterface.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MapInterface.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThreeScene$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    settings: settings
                }, void 0, false, {
                    fileName: "[project]/src/components/MapInterface.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/MapInterface.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    x: 400
                },
                animate: {
                    x: isRightOpen ? 0 : 400
                },
                transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 22
                },
                className: "w-80 h-full bg-neutral-900 border-l border-neutral-700 p-4 absolute right-0 top-0 flex flex-col gap-4 shadow-xl rounded-l-2xl overflow-y-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold",
                                children: "Панель даних"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MapInterface.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                onClick: ()=>setIsRightOpen(false),
                                children: "Закрити"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MapInterface.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MapInterface.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "Масштаб: ",
                                    settings.zoom
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MapInterface.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "Будівлі: ",
                                    settings.buildings ? "Увімкнено" : "Вимкнено"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MapInterface.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "Трафік: ",
                                    settings.traffic ? "Увімкнено" : "Вимкнено"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MapInterface.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "Погода: ",
                                    settings.weather ? "Увімкнено" : "Вимкнено"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MapInterface.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "Позначки: ",
                                    settings.labels ? "Увімкнено" : "Вимкнено"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MapInterface.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MapInterface.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-semibold mt-2",
                        children: "JS Console"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MapInterface.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ConsolePanel, {
                        logs: logs
                    }, void 0, false, {
                        fileName: "[project]/src/components/MapInterface.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MapInterface.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MapInterface.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(MapInterface, "r+J4E2ntLOjaEGjRS9MGIsUhx/w=");
_c1 = MapInterface;
var _c, _c1;
__turbopack_context__.k.register(_c, "ConsolePanel");
__turbopack_context__.k.register(_c1, "MapInterface");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_46bf6862._.js.map