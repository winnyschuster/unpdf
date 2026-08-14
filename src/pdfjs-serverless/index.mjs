import './mocks.mjs'
import './polyfills.mjs'
// Inlines the worker under `globalThis.pdfjsWorker`, where the patched loader finds it.
import 'pdfjs-dist/build/pdf.worker.mjs'

export * from 'pdfjs-dist/build/pdf.mjs'
