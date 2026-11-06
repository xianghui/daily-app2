import csv,json
with open('export-test.csv',newline='') as f: rows=list(csv.DictReader(f))
a=json.load(open('export-test.json'))
assert rows==a['records'];assert len(rows)==4
print('4 reviewed records round-tripped: JSON == parsed CSV, including quoted note and unresolved mapping.')
