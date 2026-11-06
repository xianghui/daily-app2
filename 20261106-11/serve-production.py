from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from pathlib import Path
class Handler(SimpleHTTPRequestHandler):
 def translate_path(self,path):
  prefix='/daily-app2/20261106-11/'
  if path.split('?')[0].startswith(prefix):return str(Path(__file__).parent/'dist'/path.split('?')[0][len(prefix):])
  if path.split('?')[0] in ['/daily-app2/','/daily-app2/index.html']:return '/Volumes/ExternalHD/daily_app2/index.html'
  return '/tmp/no-such-trihedral-path'
ThreadingHTTPServer(('127.0.0.1',6011),Handler).serve_forever()
