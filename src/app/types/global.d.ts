declare module '*.scss' {
    interface IClassNames{
        [className:string]: string
    }
    const className: IClassNames;
    export = className
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module  '*.svg' {
    import React from "react";
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
    export default SVG
}

declare const __IS_DEV__: boolean;
