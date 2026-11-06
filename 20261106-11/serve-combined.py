from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from pathlib import Path
class Handler(SimpleHTTPRequestHandler):
 def translate_path(self,path):
  path=path.split('?')[0];prefix='/daily-app2/'
  if path.startswith(prefix):return str(Path(__file__).parent.parent/'deploy'/path[len(prefix):])
  return '/tmp/no-such-combined-path'
ThreadingHTTPServer(('127.0.0.1',6012),Handler).serve_forever()
