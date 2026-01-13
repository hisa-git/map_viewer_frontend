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
"[project]/src/components/three/ChunkLoader.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChunkLoader",
    ()=>ChunkLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$proj4$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/proj4/lib/index.js [app-client] (ecmascript)");
;
;
;
/* ---------- helpers & constants ---------- */ const WGS84 = "EPSG:4326";
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
const clamp = (v, a, b)=>Math.max(a, Math.min(b, v));
/* ---------- base renderer ---------- */ class LayerRenderer {
    constructor(centerOffset = [
        0,
        0
    ]){
        this.centerOffset = centerOffset;
        this._projFrom = WGS84;
        this._projTo = WEB_MERCATOR;
    }
    toLocal(lon, lat) {
        const [x0, z0] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$proj4$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this._projFrom, this._projTo, [
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
/* ---------- polygon base (used by buildings & rivers) ---------- */ class PolygonRendererBase extends LayerRenderer {
    // Convert a polygon (outer + holes) to a THREE.Shape
    _ensureClosed(ring = []) {
        if (!Array.isArray(ring) || ring.length === 0) return ring;
        const first = ring[0];
        const last = ring[ring.length - 1];
        if (first[0] === last[0] && first[1] === last[1]) return ring;
        return [
            ...ring,
            first
        ];
    }
    _coordsToShape(polygonCoords = []) {
        if (!Array.isArray(polygonCoords) || polygonCoords.length === 0) return null;
        const outer = this._ensureClosed(polygonCoords[0]);
        if (!outer || outer.length < 3) return null;
        const shape = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shape"]();
        for(let i = 0; i < outer.length; i++){
            const [lon, lat] = outer[i];
            const [x, z] = this.toLocal(lon, lat);
            if (i === 0) shape.moveTo(x, z);
            else shape.lineTo(x, z);
        }
        for(let i = 1; i < polygonCoords.length; i++){
            const hole = this._ensureClosed(polygonCoords[i]);
            if (!hole || hole.length < 3) continue;
            const pts = hole.map(([lon, lat])=>{
                const [x, z] = this.toLocal(lon, lat);
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](x, z);
            });
            shape.holes.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Path"](pts));
        }
        return shape;
    }
}
/* ---------- Buildings ---------- */ class BuildingsRenderer extends PolygonRendererBase {
    renderFeature(feature) {
        const { geometry, properties = {} } = feature;
        if (!geometry) return [];
        const height = properties.height ?? DEFAULTS.buildingHeight;
        const meshes = [];
        const handleCoords = (coords)=>{
            const shape = this._coordsToShape(coords);
            if (!shape) return;
            const extrude = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExtrudeGeometry"](shape, {
                depth: height,
                bevelEnabled: false
            });
            extrude.rotateX(-Math.PI / 2);
            const mat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color: 0xcccccc,
                roughness: 0.8,
                metalness: 0.2
            });
            const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](extrude, mat);
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            meshes.push(mesh);
        };
        if (geometry.type === "Polygon") handleCoords(geometry.coordinates);
        else if (geometry.type === "MultiPolygon") for (const poly of geometry.coordinates)handleCoords(poly);
        return meshes;
    }
}
/* ---------- Rivers (water) ---------- */ class RiversRenderer extends PolygonRendererBase {
    renderFeature(feature) {
        const { geometry } = feature;
        if (!geometry) return [];
        const meshes = [];
        const handleCoords = (coords)=>{
            const shape = this._coordsToShape(coords);
            if (!shape) return;
            const geom = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShapeGeometry"](shape);
            geom.rotateX(-Math.PI / 2);
            const mat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color: 0x3b82f6,
                roughness: 0.6,
                metalness: 0.1,
                transparent: true,
                opacity: 0.8
            });
            const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geom, mat);
            mesh.receiveShadow = true;
            meshes.push(mesh);
        };
        if (geometry.type === "Polygon") handleCoords(geometry.coordinates);
        else if (geometry.type === "MultiPolygon") for (const poly of geometry.coordinates)handleCoords(poly);
        return meshes;
    }
}
/* ---------- Roads ---------- */ class RoadsRenderer extends LayerRenderer {
    renderFeature(feature) {
        const { geometry, properties = {} } = feature;
        if (!geometry) return [];
        const meshes = [];
        const handleLine = (coords)=>{
            const mesh = this._lineToMesh(coords, properties);
            if (mesh) meshes.push(mesh);
        };
        if (geometry.type === "LineString") handleLine(geometry.coordinates);
        else if (geometry.type === "MultiLineString") for (const ls of geometry.coordinates)handleLine(ls);
        return meshes;
    }
    _getRoadWidth(props = {}) {
        const t = props.fclass || props.highway || props.type || "residential";
        return DEFAULTS.roadWidths[t] ?? 5;
    }
    _getRoadColor(props = {}) {
        const t = props.fclass || props.highway || props.type || "residential";
        return DEFAULTS.roadColors[t] ?? 0xdddddd;
    }
    _lineToMesh(coords = [], props = {}) {
        if (!Array.isArray(coords) || coords.length < 2) return null;
        const y = DEFAULTS.roadY;
        const pts = coords.map(([lon, lat])=>{
            const [x, z] = this.toLocal(lon, lat);
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](x, y, z);
        });
        const width = this._getRoadWidth(props);
        const positions = [];
        const uvs = [];
        const indices = [];
        for(let i = 0; i < pts.length - 1; i++){
            const p1 = pts[i], p2 = pts[i + 1];
            const dir = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().subVectors(p2, p1);
            const len = dir.length();
            if (len === 0) continue;
            dir.normalize();
            const perp = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-dir.z, 0, dir.x).multiplyScalar(width / 2);
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
        const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
        geometry.setAttribute("position", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Float32BufferAttribute"](positions, 3));
        geometry.setAttribute("uv", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Float32BufferAttribute"](uvs, 2));
        geometry.setIndex(indices);
        geometry.computeVertexNormals();
        const material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            color: this._getRoadColor(props),
            roughness: 1.0,
            metalness: 0.0,
            polygonOffset: true,
            polygonOffsetFactor: -3,
            polygonOffsetUnits: -3
        });
        const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geometry, material);
        mesh.rotation.x = -Math.PI;
        return mesh;
    }
}
/* ---------- Heatmap stub ---------- */ class HeatmapRenderer extends LayerRenderer {
    renderFeature() {
        return [];
    }
}
/* ---------- Renderer map & ChunkLoader ---------- */ const RENDERERS = {
    buildings: BuildingsRenderer,
    roads: RoadsRenderer,
    rivers: RiversRenderer,
    heatmap: HeatmapRenderer
};
class ChunkLoader {
    constructor(scene, opts = {}){
        this.scene = scene;
        this.loaded = new Map();
        this.meshGroups = new Map();
        this.url = opts.url || "http://127.0.0.1:8000/chunk";
        this.onProgress = opts.onProgress || (()=>{});
        this.centerOffset = opts.centerOffset || [
            0,
            0
        ];
        this.layerType = opts.layerType || "buildings";
        const Renderer = RENDERERS[this.layerType] || BuildingsRenderer;
        this.renderer = new Renderer(this.centerOffset);
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
            const rendered = this._renderGeoJSON(data, key);
            this.onProgress({
                key,
                featuresTotal: data.features?.length || 0,
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
            if (e.name !== "AbortError") console.error("ChunkLoader fetch error:", e);
            return null;
        }
    }
    _renderGeoJSON(data, key) {
        if (!data?.features) return 0;
        // dispose old
        if (this.meshGroups.has(key)) {
            const old = this.meshGroups.get(key);
            this.scene.remove(old);
            old.traverse((n)=>{
                if (n.geometry) n.geometry.dispose();
                if (n.material) n.material.dispose();
            });
            this.meshGroups.delete(key);
        }
        const group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
        let rendered = 0;
        for (const feature of data.features){
            if (!feature?.geometry) continue;
            const meshes = this.renderer.renderFeature(feature) || [];
            for (const m of meshes){
                if (!m) continue;
                group.add(m);
                rendered++;
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
    const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](75, width / height, 0.1, 1000000);
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
// Строгий, компактный, понятный рефакторинг сцены.
// - Вынесены константы и вспомогательные функции
// - Общая логика загрузки тайлов сделана универсальной для любого лоадера
// - Добавлен рендеринг воды (river/water layer)
// - Чистая остановка / освобождение ресурсов
const WGS84 = "EPSG:4326";
const WEB_MERCATOR = "EPSG:3857";
const TILE = {
    sizeDeg: 0.05,
    viewRadius: 5
};
const DEFAULTS = {
    startLon: parseFloat(("TURBOPACK compile-time value", "32.000757") || "0"),
    startLat: parseFloat(("TURBOPACK compile-time value", "47.015347") || "0")
};
function clamp(v, a, b) {
    return Math.max(a, Math.min(b, v));
}
function buildTileKey(x, y) {
    return `${x}_${y}`;
}
function ThreeScene({ settings }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const loadersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const acRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null); // AbortController for current update
    const isMounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThreeScene.useEffect": ()=>{
            const container = containerRef.current;
            if (!container) return;
            // Renderer, camera, controls
            const renderer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRenderer"])(container);
            const camera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$Camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCamera"])(container.clientWidth, container.clientHeight);
            camera.fov = 60;
            camera.updateProjectionMatrix();
            const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$Controls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createControls"])(camera, renderer.domElement);
            // center in WebMercator
            const [centerX, centerZ] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$proj4$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(WGS84, WEB_MERCATOR, [
                DEFAULTS.startLon,
                DEFAULTS.startLat
            ]);
            camera.position.set(0, 800, 800);
            camera.lookAt(0, 0, 0);
            controls.target.set(0, 0, 0);
            controls.update();
            // Scene
            const { scene, cube } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$Scene$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createScene"])();
            scene.background = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xbfd9ff);
            const dirLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DirectionalLight"](0xffffff, 1.0);
            dirLight.position.set(1000, 2000, 1000);
            scene.add(dirLight);
            const ambLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmbientLight"](0x666666, 0.8);
            scene.add(ambLight);
            const cleanupRaycast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$Raycast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupRaycast"])(renderer.domElement, camera, scene, controls, container);
            // generic loader factory
            function createLayerLoader({ url, prefix, layerType }) {
                const l = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$ChunkLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChunkLoader"](scene, {
                    url,
                    centerOffset: [
                        centerX,
                        centerZ
                    ],
                    layerType,
                    onProgress: {
                        "ThreeScene.useEffect.createLayerLoader": (meta)=>{
                            setStatus({
                                "ThreeScene.useEffect.createLayerLoader": (s)=>({
                                        ...s,
                                        [prefix.replace(/_$/, "")]: meta.rendered || 0,
                                        lastQueryMs: meta.queryTimeMs || s.lastQueryMs
                                    })
                            }["ThreeScene.useEffect.createLayerLoader"]);
                        }
                    }["ThreeScene.useEffect.createLayerLoader"]
                });
                return {
                    loader: l,
                    prefix
                };
            }
            // instantiate loaders: buildings, roads, rivers(water)
            // NOTE: backend endpoints — оставил прежние пути: /chunk/buildings, /chunk/roads, /chunk/water
            // ChunkLoader expects layerType keys that match its internal registry ("buildings","roads","rivers")
            const buildings = createLayerLoader({
                url: "/chunk/buildings",
                prefix: "buildings_",
                layerType: "buildings"
            });
            const roads = createLayerLoader({
                url: "/chunk/roads",
                prefix: "roads_",
                layerType: "roads"
            });
            const water = createLayerLoader({
                url: "/chunk/water",
                prefix: "rivers_",
                layerType: "rivers"
            });
            loadersRef.current = {
                buildings,
                roads,
                water
            };
            // ground
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
            // camera-follow loop
            let frame = null;
            function animate() {
                cube.rotation.y += 0.005;
                ground.position.x = camera.position.x;
                ground.position.z = camera.position.z;
                controls.update();
                renderer.render(scene, camera);
                frame = requestAnimationFrame(animate);
            }
            animate();
            // tile loading logic (universal)
            let loading = false;
            let debounceTimer = null;
            function getVisibleTilesForTarget(targetX, targetZ) {
                const [lon, lat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$proj4$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(WEB_MERCATOR, WGS84, [
                    targetX + centerX,
                    targetZ + centerZ
                ]);
                const tileX = Math.floor(lon / TILE.sizeDeg);
                const tileY = Math.floor(lat / TILE.sizeDeg);
                const tiles = [];
                const active = new Set();
                for(let dx = -TILE.viewRadius; dx <= TILE.viewRadius; dx++){
                    for(let dy = -TILE.viewRadius; dy <= TILE.viewRadius; dy++){
                        const x = tileX + dx;
                        const y = tileY + dy;
                        const minLon = x * TILE.sizeDeg;
                        const minLat = y * TILE.sizeDeg;
                        const maxLon = (x + 1) * TILE.sizeDeg;
                        const maxLat = (y + 1) * TILE.sizeDeg;
                        const key = buildTileKey(x, y);
                        tiles.push({
                            minLon,
                            minLat,
                            maxLon,
                            maxLat,
                            key
                        });
                        active.add(key);
                    }
                }
                return {
                    tiles,
                    active
                };
            }
            async function loadVisibleTiles() {
                if (loading) return;
                loading = true;
                const { tiles, active } = getVisibleTilesForTarget(controls.target.x, controls.target.z);
                // abort previous
                if (acRef.current) acRef.current.abort();
                acRef.current = new AbortController();
                const signal = acRef.current.signal;
                try {
                    // for each tile, load each layer in parallel but avoid waiting for water to block buildings/roads
                    await Promise.all(tiles.map({
                        "ThreeScene.useEffect.loadVisibleTiles": (tile)=>Promise.allSettled([
                                loadersRef.current.buildings.loader.loadChunk(tile.minLon, tile.minLat, tile.maxLon, tile.maxLat, {
                                    simplify: 2.0,
                                    signal,
                                    useCache: true,
                                    keyHint: `buildings_${tile.key}`
                                }),
                                loadersRef.current.roads.loader.loadChunk(tile.minLon, tile.minLat, tile.maxLon, tile.maxLat, {
                                    simplify: 0.5,
                                    signal,
                                    useCache: true,
                                    keyHint: `roads_${tile.key}`
                                }),
                                loadersRef.current.water.loader.loadChunk(tile.minLon, tile.minLat, tile.maxLon, tile.maxLat, {
                                    simplify: 0.8,
                                    signal,
                                    useCache: true,
                                    keyHint: `rivers_${tile.key}`
                                })
                            ])
                    }["ThreeScene.useEffect.loadVisibleTiles"]));
                    // evict tiles not in active set for each loader
                    for (const { loader, prefix } of Object.values(loadersRef.current)){
                        for (const key of Array.from(loader.meshGroups.keys())){
                            // keys saved by ChunkLoader will be exactly the keyHint we passed (with prefix)
                            const m = key.replace(new RegExp(`^${prefix}`), "");
                            if (!active.has(m)) loader.removeChunk(key);
                        }
                    }
                } catch (e) {
                    if (e.name === "AbortError") {
                        // fine, new request superseded old
                        console.warn("[Scene] update aborted");
                    } else {
                        console.error("[Scene] loadVisibleTiles error:", e);
                    }
                } finally{
                    loading = false;
                }
            }
            const debouncedUpdate = {
                "ThreeScene.useEffect.debouncedUpdate": ()=>{
                    clearTimeout(debounceTimer);
                    debounceTimer = setTimeout(loadVisibleTiles, 250);
                }
            }["ThreeScene.useEffect.debouncedUpdate"];
            controls.addEventListener("change", debouncedUpdate);
            // initial load
            loadVisibleTiles();
            // resize
            function onResize() {
                renderer.setSize(container.clientWidth, container.clientHeight);
                camera.aspect = container.clientWidth / container.clientHeight;
                camera.updateProjectionMatrix();
            }
            window.addEventListener("resize", onResize);
            // cleanup
            return ({
                "ThreeScene.useEffect": ()=>{
                    isMounted.current = false;
                    if (frame) cancelAnimationFrame(frame);
                    clearTimeout(debounceTimer);
                    controls.removeEventListener("change", debouncedUpdate);
                    window.removeEventListener("resize", onResize);
                    if (acRef.current) acRef.current.abort();
                    // dispose loaders
                    for (const { loader } of Object.values(loadersRef.current))loader.clearAll();
                    cleanupRaycast();
                    // DOM + three cleanup
                    if (renderer.domElement && container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
                    renderer.dispose();
                    cube.geometry?.dispose();
                    if (Array.isArray(cube.material)) cube.material.forEach({
                        "ThreeScene.useEffect": (m)=>m.dispose()
                    }["ThreeScene.useEffect"]);
                    else cube.material?.dispose();
                    groundGeomCleanup(scene);
                }
            })["ThreeScene.useEffect"];
            //TURBOPACK unreachable
            ;
            // helper local cleanup that ensures ground geometry is disposed
            function groundGeomCleanup(s) {
                // attempt to find ground by its material color (best-effort)
                s.traverse({
                    "ThreeScene.useEffect.groundGeomCleanup": (n)=>{
                        if (n.isMesh) {
                            n.geometry?.dispose();
                            if (Array.isArray(n.material)) n.material.forEach({
                                "ThreeScene.useEffect.groundGeomCleanup": (m)=>m.dispose()
                            }["ThreeScene.useEffect.groundGeomCleanup"]);
                            else n.material?.dispose();
                        }
                    }
                }["ThreeScene.useEffect.groundGeomCleanup"]);
            }
        }
    }["ThreeScene.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef,
            className: "w-full h-full"
        }, void 0, false, {
            fileName: "[project]/src/components/ThreeScene.jsx",
            lineNumber: 251,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ThreeScene.jsx",
        lineNumber: 250,
        columnNumber: 5
    }, this);
}
_s(ThreeScene, "PuYuEn5YTOdMrvExLQBrQ5mJWZk=");
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

//# sourceMappingURL=src_b7fc6c90._.js.map