import http.server,os
os.chdir('/Volumes/ExternalHD/daily_app2')
class Handler(http.server.SimpleHTTPRequestHandler):
 def translate_path(self,path):
  path=path.split('?',1)[0]
  if path.startswith('/daily-app2/20261112-2/'):
   return '/Volumes/ExternalHD/daily_app2/20261112-2/dist/'+path[len('/daily-app2/20261112-2/'):]
  if path.startswith('/daily-app2/'):
   parts=path[len('/daily-app2/'):].split('/',1)
   return '/Volumes/ExternalHD/daily_app2/'+parts[0]+'/dist/'+(parts[1] if len(parts)>1 else '')
  return super().translate_path(path)
http.server.ThreadingHTTPServer(('127.0.0.1',6483),Handler).serve_forever()
