// Solve the physical 33-site board; only a validation tool, never browser gameplay.
#include <iostream>
#include <vector>
#include <unordered_set>
#include <algorithm>
#include <fstream>
#include <cstdint>
using namespace std;
struct Move{int a,b,c;uint64_t mask,need;};
vector<Move> moves,path;unordered_set<uint64_t> dead;vector<pair<int,int>> sites;long long nodes=0;
bool solve(uint64_t s,int left){nodes++;if(left==1)return true;if(dead.count(s))return false;for(auto m:moves)if((s&m.mask)==m.need){path.push_back(m);if(solve(s^m.mask,left-1))return true;path.pop_back();}dead.insert(s);return false;}
int main(){int lookup[7][7];for(auto &row:lookup)for(int&x:row)x=-1;for(int r=0;r<7;r++)for(int c=0;c<7;c++)if(abs(r-3)<=1||abs(c-3)<=1){lookup[r][c]=sites.size();sites.push_back({r-3,c-3});}for(int a=0;a<33;a++){auto[r,c]=sites[a];r+=3;c+=3;for(auto[dr,dc]:vector<pair<int,int>>{{0,1},{0,-1},{1,0},{-1,0}}){int rr=r+2*dr,cc=c+2*dc;if(rr>=0&&rr<7&&cc>=0&&cc<7&&lookup[rr][cc]>=0){int b=lookup[r+dr][c+dc],z=lookup[rr][cc];moves.push_back({a,b,z,(1ULL<<a)|(1ULL<<b)|(1ULL<<z),(1ULL<<a)|(1ULL<<b)});}}}stable_sort(moves.begin(),moves.end(),[](auto a,auto b){auto[r,c]=sites[a.c];auto[x,y]=sites[b.c];return r*r+c*c<x*x+y*y;});uint64_t start=((1ULL<<33)-1)^(1ULL<<lookup[3][3]);if(!solve(start,32))return 1;cout<<"{\"sites\":33,\"startPegs\":32,\"centerVacant\":true,\"jumps\":[";for(int i=0;i<path.size();i++){if(i)cout<<",";auto m=path[i];cout<<"["<<m.a<<","<<m.b<<","<<m.c<<"]";}cout<<"],\"nodesSearched\":"<<nodes<<",\"physicalPlayTested\":false}\n";}
