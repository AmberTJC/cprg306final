"use client";
import React from "react";
import CharacterInfo from "./CharacterInfo";
import CharacterSheet from "./CharacterSheet";






export default function Character_page(){

    return(
        <div className='p-6 max-w-sm mx-auto bg-amber-50 rounded-xl shadow-lg flex items-center gap-x-4 grid justify-items-stretch text-black border-solid
         border-amber-700 border-2 bg-gradient-to-r from-amber-50 to-amber-100 '>
            <CharacterInfo ></CharacterInfo>
           <CharacterSheet></CharacterSheet>
           
        </div>
    );

};

