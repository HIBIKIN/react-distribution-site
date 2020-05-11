import React, {FC, useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import firebase from '../firebase';
import TopHeader from "../components/topPage/topHeader";
import {TileData} from "../types/types";

const useStyles = makeStyles(() =>
    createStyles({
        tileImage: {
            height: "436px",
            width: "436px",
        },
        main: {
            textAlign: "center",
            marginTop: "5%",
        },
    })
)

const DownloadPage: FC =() => {
    const { keyword } = useParams();
    const classes = useStyles();
    const [data, setData] = useState<TileData[]>([]);
    
    const getData = async(searchWord: string | undefined) => {
        const db = firebase.firestore();
        const tileDataRef = db.collection("tileData");
        const searchedData = tileDataRef.where("keyword", "array-contains", searchWord);
        const snapShot = await searchedData.get();
        const temporaryData: object[] = [];
        
        snapShot.docs.map(doc => {
            temporaryData.push(doc.data());
        })
        
        setData(temporaryData as TileData[]);
    }
    
    useEffect(() => {
        getData(keyword);
    },[]);
    
    const displayImage = () => {
        return(
            <div>
                {data.map((tile) => (
                    <div>
                        <img className={classes.tileImage} src={tile.image} alt={tile.title} />
                    </div>
                ))}
            </div>
        )
    }
    
    const downloadButton = () => {
        return(
            <div>
                {data.map((tile) => (
                    <Button
                        variant="contained"
                        href={tile.downloadUrl}
                    >
                        無料ダウンロード
                    </Button>
                ))}
            </div>
        ) 
    }
    

    return(
        <div>
            <TopHeader />
            <div className={classes.main}>
                {displayImage()}
                {downloadButton()}
            </div>
        </div>
    )
}

export default DownloadPage;