"""Local validation server. python3 serve-test.py [--assembled] [--port 7353]"""
from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from pathlib import Path
from urllib.parse import unquote,urlsplit
import argparse
p=argparse.ArgumentParser();p.add_argument('--assembled',action='store_true');p.add_argument('--port',type=int,default=7353);args=p.parse_args();root=Path(__file__).resolve().parent.parent
class Handler(SimpleHTTPRequestHandler):
 def translate_path(self,path):
  rel=unquote(urlsplit(path).path).removeprefix('/daily-app2/');bits=rel.split('/',1)
  if args.assembled:return str(root/'deploy'/rel)
  if bits[0] and (root/bits[0]/'dist').is_dir():return str(root/bits[0]/'dist'/(bits[1] if len(bits)>1 else ''))
  return str(root/rel)
print('Production test server:',args.port,'assembled:',args.assembled,flush=True)
ThreadingHTTPServer(('127.0.0.1',args.port),Handler).serve_forever()
