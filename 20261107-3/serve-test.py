import sys
from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from pathlib import Path
class Handler(SimpleHTTPRequestHandler):
 def translate_path(self,path):
  prefix='/daily-app2/20261107-3/'
  shared='/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm'
  if path.split('?',1)[0]==shared:return str(Path('../20261107-2/dist/assets')/Path(shared).name)
  return str(Path('dist')/path.split('?',1)[0].removeprefix(prefix)) if path.startswith(prefix) else str(Path('dist')/'index.html')
ThreadingHTTPServer(('127.0.0.1',int(sys.argv[1]) if len(sys.argv)>1 else 6179),Handler).serve_forever()
