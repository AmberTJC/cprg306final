"use client";
import React from "react";
import CharacterInfo from "./character_info";
import CharacterSheet from "./character_sheet";



export default function Character_page(){

    return(
        <div>
            <CharacterSheet></CharacterSheet>
            <CharacterInfo></CharacterInfo>
        </div>
    );

};

