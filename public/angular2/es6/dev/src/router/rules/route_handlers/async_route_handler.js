import { isPresent } from 'angular2/src/facade/lang';
import { RouteData, BLANK_ROUTE_DATA } from '../../instruction';
export class AsyncRouteHandler {
    constructor(_loader, data = null) {
        this._loader = _loader;
        /** @internal */
        this._resolvedComponent = null;
        this.data = isPresent(data) ? new RouteData(data) : BLANK_ROUTE_DATA;
    }
    resolveComponentType() {
        if (isPresent(this._resolvedComponent)) {
            return this._resolvedComponent;
        }
        return this._resolvedComponent = this._loader().then((componentType) => {
            this.componentType = componentType;
            return componentType;
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN5bmNfcm91dGVfaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9yb3V0ZXIvcnVsZXMvcm91dGVfaGFuZGxlcnMvYXN5bmNfcm91dGVfaGFuZGxlci50cyJdLCJuYW1lcyI6WyJBc3luY1JvdXRlSGFuZGxlciIsIkFzeW5jUm91dGVIYW5kbGVyLmNvbnN0cnVjdG9yIiwiQXN5bmNSb3V0ZUhhbmRsZXIucmVzb2x2ZUNvbXBvbmVudFR5cGUiXSwibWFwcGluZ3MiOiJPQUFPLEVBQUMsU0FBUyxFQUFPLE1BQU0sMEJBQTBCO09BR2pELEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDLE1BQU0sbUJBQW1CO0FBRzdEO0lBTUVBLFlBQW9CQSxPQUE0QkEsRUFBRUEsSUFBSUEsR0FBeUJBLElBQUlBO1FBQS9EQyxZQUFPQSxHQUFQQSxPQUFPQSxDQUFxQkE7UUFMaERBLGdCQUFnQkE7UUFDaEJBLHVCQUFrQkEsR0FBa0JBLElBQUlBLENBQUNBO1FBS3ZDQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxnQkFBZ0JBLENBQUNBO0lBQ3ZFQSxDQUFDQTtJQUVERCxvQkFBb0JBO1FBQ2xCRSxFQUFFQSxDQUFDQSxDQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxrQkFBa0JBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3ZDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxrQkFBa0JBLENBQUNBO1FBQ2pDQSxDQUFDQTtRQUVEQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxrQkFBa0JBLEdBQUdBLElBQUlBLENBQUNBLE9BQU9BLEVBQUVBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLGFBQWFBO1lBQ2pFQSxJQUFJQSxDQUFDQSxhQUFhQSxHQUFHQSxhQUFhQSxDQUFDQTtZQUNuQ0EsTUFBTUEsQ0FBQ0EsYUFBYUEsQ0FBQ0E7UUFDdkJBLENBQUNBLENBQUNBLENBQUNBO0lBQ0xBLENBQUNBO0FBQ0hGLENBQUNBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2lzUHJlc2VudCwgVHlwZX0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcblxuaW1wb3J0IHtSb3V0ZUhhbmRsZXJ9IGZyb20gJy4vcm91dGVfaGFuZGxlcic7XG5pbXBvcnQge1JvdXRlRGF0YSwgQkxBTktfUk9VVEVfREFUQX0gZnJvbSAnLi4vLi4vaW5zdHJ1Y3Rpb24nO1xuXG5cbmV4cG9ydCBjbGFzcyBBc3luY1JvdXRlSGFuZGxlciBpbXBsZW1lbnRzIFJvdXRlSGFuZGxlciB7XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3Jlc29sdmVkQ29tcG9uZW50OiBQcm9taXNlPFR5cGU+ID0gbnVsbDtcbiAgY29tcG9uZW50VHlwZTogVHlwZTtcbiAgcHVibGljIGRhdGE6IFJvdXRlRGF0YTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2FkZXI6ICgpID0+IFByb21pc2U8VHlwZT4sIGRhdGE6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0gbnVsbCkge1xuICAgIHRoaXMuZGF0YSA9IGlzUHJlc2VudChkYXRhKSA/IG5ldyBSb3V0ZURhdGEoZGF0YSkgOiBCTEFOS19ST1VURV9EQVRBO1xuICB9XG5cbiAgcmVzb2x2ZUNvbXBvbmVudFR5cGUoKTogUHJvbWlzZTxUeXBlPiB7XG4gICAgaWYgKGlzUHJlc2VudCh0aGlzLl9yZXNvbHZlZENvbXBvbmVudCkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXNvbHZlZENvbXBvbmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fcmVzb2x2ZWRDb21wb25lbnQgPSB0aGlzLl9sb2FkZXIoKS50aGVuKChjb21wb25lbnRUeXBlKSA9PiB7XG4gICAgICB0aGlzLmNvbXBvbmVudFR5cGUgPSBjb21wb25lbnRUeXBlO1xuICAgICAgcmV0dXJuIGNvbXBvbmVudFR5cGU7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==