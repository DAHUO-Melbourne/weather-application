import styled from 'styled-components';
import StackUtils from 'stack-utils';

export const WeatherWrapper = styled.div`
    width: 85%;
    border-radius: 10px;
    position: absolute;
    display: flex;
    box-shadow: 0 0 20px rgba(0,0,0,.1);
    margin: auto;
    height: 590px;
    left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
`;
export const WeatherLeftWrapper = styled.div`
    -webkit-box-flex: 2;
    flex: 2 2;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-flow: column;
    -webkit-box-pack: center;
    
    -webkit-box-align: center;
    
    -webkit-animation: 1.5s ease-in-out fadein;
    animation: 1.5s ease-in-out fadein;

    text-align:center;
    padding-bottom: 100px;
    padding-left: 80px;
    padding-right: 80px;
`;

export const WeatherLeftHeading = styled.h3`
    color: #0c1066;

    font-size: 1.85rem;
    letter-spacing: .1rem;
    word-break: break-all;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
`;

export const WeatherRightWrapper = styled.div`
    flex: 3 3;
    display: flex;
    min-height: 100%;
    border-radius: 0 10px 10px 0;
    background: url(https://www.viajarsolo.com/thumbnails/gallery_image_full/components/kcfinder/kcfinder-3.12/upload/images/0B8ejrJ3IlSZvQUdyWHgtZjdtVVE.jpg?itok=Y2KZ6rfH) center center/cover no-repeat;
    position: relative;
    background-image:url('https://www.dituguancha.com/upload/815_2.jpg');
`;

export const WeatherInputWrapper=styled.div`
    position: relative;
    display: block;
`;

export const WeatherSearchInput = styled.input`
    box-sizing: border-box;
    width: 100%;
    padding: 1.5rem;
    border-radius: 3rem;
    outline: 0;
    border: none;
    box-shadow: 0 0 2rem 0.15rem rgba(0,0,255,.1);
    font-size: 1rem;
    color: #131f69;
`;

export const WeatherSearchButton = styled.button`
    cursor: pointer;
    position: absolute;
    background-color: #31feae;
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    right: 0;
    top: -.35rem;
    outline: 0;
    border: none;
    z-index: 5;
    box-shadow: 0 0 2rem 0.15rem rgba(0,0,255,.1);
}
`;

export const WeatherRightHeadingWrapper=styled.div`
    position: relative;
    color: #fff;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-flow: column;
    -webkit-box-align: center;
    align-items: center;
    box-sizing: border-box;
    text-align: center;
    width: 100%;
    margin-bottom: 40px;
}
`;

export const WeatherRightHeading=styled.h3`
    margin-bottom: .5rem;
    margin-top: 1rem;
    font-size: 1.85rem;
    letter-spacing: .1rem;
    word-break: break-all;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    color: #fff;
    webkit-box-direction: normal;
    text-align: center;
`;

export const Hr =styled.hr`
    width: 3rem;
    background-color: #fff;
    display: block;
    unicode-bidi: isolate;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: auto;
    margin-inline-end: auto;
    overflow: hidden;
    border-style: inset;
    border-width: 1px;
`;

export const WeatherDate = styled.span`
    margin-top: .5rem;
    color: #fff;
    font-family: sans-serif;
`;

export const WeatherRightCover = styled.div`
    width: 100%;
    height: 100%;
    background:rgba(43,36,77,.5);
    border-radius: 0 10px 10px 0;
`;

export const LogoWrapper = styled.div`
    width:7rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2rem;
`

export const WeatherRightContentWrapper = styled.div`
    width:7rem;
    margin-left: auto;
    margin-right: auto;
`;

export const WeatherTempretureWrapper = styled.div`
    color: #fff;
    width: 100%;
    text-align: center;
`;

export const WeatherTempreture = styled.span`
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
`;

export const WeatherLocation = styled.div`
    margin-top: 2rem;
    margin-bottom: 5rem;
    display: block;
    text-align: center;
    font-size: 2rem;
`;

export const WeatherMain = styled.div`
    margin-bottom: 2rem;
    display: block;
    text-align: center;
    font-size: 1rem;
`;

export const DataSubmissionButton = styled.button`
    width:7rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
    border-radius: 50px;
    margin-bottom: 2rem;
    background: white;
    color: #000;
    box-shadow: 0 0 2rem rgba(0,0,255,.3);
    outline: 0;
    border: none;
`