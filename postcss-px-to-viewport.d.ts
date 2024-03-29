declare module 'postcss-px-to-viewport' {

    type Options = {
        unitToConvert: 'px' | 'rem' | 'cm' | 'em',
        viewportWidth: number,

        viewportHeight: number,
        unitPrecision: number,
        viewportUnit: string,
        fontViewportUnit: string,
        selectorBlackList: string[],
        propList: string[],
        minPixelValue: number,
        mediaQuery: boolean,
        replace: boolean,
        landscape: boolean,
        landscapeUnit: string,
        landscapeWidth: number,
        exclude:string[],
        include:string[],
    }

    export default function(options: Partial<Options>):never
}
