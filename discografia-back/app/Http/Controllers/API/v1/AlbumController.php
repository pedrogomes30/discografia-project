<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use \App\Models\Album;
use \App\Models\Track;


class AlbumController extends Controller
{
    public static function index()
    {
        $return = array();
        foreach(Album::all() as $album){
            $return[$album->id] = $album;
            $tracks = Track::where('album_id',$album->id)->get();
            $return[$album->id]->tracks = $tracks;
        }
        return $return;
    }
    
    public static function store(Request $request)
    {
        try{
            DB::beginTransacion();
            $request->validate([
                'name',
                'release_date',
            ]);
            $return = Album::create($request->all());
            DB::commit();
            return $return;
        }catch(\Exception $e){
            DB::rollBack();
            return response()->json(['error'=>true,'message'=>$e->getmessage()],500);
        }
    }
    public static function update(Request $request,$id)
    {
        try{
            //revisar esse algoritmo, está fora do padrão.
            DB::beginTransaction();
            $request->validate([
                'name',
                'release_date',
            ]);
            $album               = Album::findOrFail($id);
            $request             = $request->all();
            $album->release_date = $request['release_date'];
            $album->name         = $request['name'];
            $album->artist_id    = $request['artist_id'];
            $album->save();
            DB::commit();
            return $album;
        }catch(\Exception $e){
            DB::rollBack();
            return response()->json(['error'=>true,'message'=>$e->getmessage()],500);
        }
    }

    public static function show($id)
    {
        try{
            return Album::findOrFail($id);
        }catch(\Exception $e){
            return response()->json(['error'=>true,'message'=>$e->getmessage()],500);
        }
    }

    public static function delete($id)
    {
        try{
            DB::beginTransaction();
            $return = album::destroy($id);
            DB::commit();
            return $return;
        }catch(\Exception $e){
            DB::rollBack();
            return response()->json(['error'=>true,'message'=>$e->getmessage()],500);
        }
    }
}
