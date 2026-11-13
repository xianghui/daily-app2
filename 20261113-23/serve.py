import http.server,os
os.chdir('/Volumes/ExternalHD/daily_app2')
class Handler(http.server.SimpleHTTPRequestHandler):
 def translate_path(self,path):
  path=path.split('?')[0]
  if path.startswith('/daily-app2/20261113-23/'):
   return super().translate_path('/20261113-23/dist/'+path.removeprefix('/daily-app2/20261113-23/'))
  return super().translate_path('/20261107-2/dist/assets/'+path.rsplit('/',1)[-1]) if '/20261107-2/assets/' in path else super().translate_path(path.removeprefix('/daily-app2'))
http.server.ThreadingHTTPServer(('127.0.0.1',6763),Handler).serve_forever()
