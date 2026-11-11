import http.server,os
os.chdir('/Volumes/ExternalHD/daily_app2/deploy')
class Handler(http.server.SimpleHTTPRequestHandler):
 def translate_path(self,path):
  path=path.split('?',1)[0]
  if path.startswith('/daily-app2/'):
   return '/Volumes/ExternalHD/daily_app2/deploy/'+path[len('/daily-app2/'):]
  return super().translate_path(path)
http.server.ThreadingHTTPServer(('127.0.0.1',6471),Handler).serve_forever()
