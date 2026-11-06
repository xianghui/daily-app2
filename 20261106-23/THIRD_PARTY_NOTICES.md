# Third-party sources

- MiniLM-L6-v2 sentence embeddings and Xenova ONNX conversion: MIT. Model cards: https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2 and https://huggingface.co/Xenova/all-MiniLM-L6-v2 . Weights downloaded by the end user's browser, not committed here.
- Transformers.js: Apache-2.0, https://github.com/huggingface/transformers.js . Bundled worker includes its runtime.
- ONNX Runtime Web: MIT, https://github.com/microsoft/onnxruntime . The bundled WASM and `public/runtime/ort-wasm-simd-threaded.asyncify.mjs` come from the installed onnxruntime-web distribution. Preserve embedded copyright/license notices.
- React: MIT, https://github.com/facebook/react .
- Papa Parse: MIT, https://github.com/mholt/PapaParse .
- Vite: MIT, https://github.com/vitejs/vite .

Exact package versions and transitive dependencies are recorded in package-lock.json. Test fixtures are synthetic.
