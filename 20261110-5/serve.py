from http.server import SimpleHTTPRequestHandler,ThreadingHTTPServer
from pathlib import Path
root=Path('/Volumes/ExternalHD/daily_app2')
class Handler(SimpleHTTPRequestHandler):
 def translate_path(self,path):
  path=path.split('?')[0].removeprefix('/daily-app2/')
  parts=path.split('/')
  if parts[0]=='20261110-5': return str(root/parts[0]/'dist'/'/'.join(parts[1:]))
  if len(parts)>1 and parts[0].startswith('2026'):return str(root/parts[0]/'dist'/'/'.join(parts[1:]))
  return str(root/path)
ThreadingHTTPServer(('127.0.0.1',6335),Handler).serve_forever()
