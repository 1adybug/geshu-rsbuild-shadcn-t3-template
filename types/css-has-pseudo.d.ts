declare module "css-has-pseudo/browser" {
    interface CssHasPseudoOptions {
        observedAttributes?: string[]
    }

    export default function cssHasPseudo(document: Document, options?: CssHasPseudoOptions): void
}
