import styled from 'styled-components'

export const LoginWrapper = styled.div`
    width: 85%;
    border-radius: 10px;
    position: relatice;
    display: flex;
    box-shadow: 0 0 20px rgba(0,0,0,.1);
    margin: auto;
`;

export const LoginLeftWrapper = styled.div`
    -webkit-box-flex: 2;
    flex: 2 2;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-flow: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    -webkit-animation: 1.5s ease-in-out fadein;
    animation: 1.5s ease-in-out fadein;
    min-height: 100%;
    padding-top: 100px;
    padding-bottom: 100px;
`;

export const LoginRightWrapper = styled.div`
    flex: 3 3;
    display: flex;
    min-height: 100%;
    border-radius: 0 10px 10px 0;
    background: url(https://source.unsplash.com/random/1200x900?mountain) center center/cover no-repeat;
    position: relative;
`;

export const LoginHeader = styled.span`
    font-size: 2.5rem;
    display: block;
    margin-bottom: 2rem;
    color: #0c1066;
    letter-spacing: .2rem;
    font-weight: 700;
    text-align: center;
    font-family: sans-serif;
`;

export const LoginForm = styled.form`
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-flow: column;
    width: 80%;
    -webkit-box-align: center;
    align-items: center;
`;

export const LoginInput = styled.input`
    margin: 1rem 0;
    padding: 1.5rem;
    border-radius: 2rem;
    outline: 0;
    border: none;
    box-shadow: 0 0 2rem rgba(0,0,255,.3);
    width: 80%;
`;

export const LoginButton = styled.div`
    padding: 1rem;
    border-radius: 2rem;
    outline: 0;
    border: none;
    color: #fff;
    font-size: 1.1rem;
    cursor: pointer;
    margin-top: 1.5rem;
    width: 50%;
    box-shadow: 0 0 2rem rgba(0,0,255,.1);
    background: #d3d3d3;
    text-align: center;
`;

export const SignupLink = styled.div`
    margin-top: 3rem;
`;

export const SignupTitle = styled.span`
    font-family: sans-serif;
`;

export const SignupClick = styled.a`
    text-transform: uppercase;
    margin-top: 1rem;
    text-decoration: none;
    color: #ff3a82;
    margin-left: 1rem;
    font-family: sans-serif;
    cursor: pointer;
`;

export const LoginRightTitle = styled.h1`
    color: #fff;
    letter-spacing: .03rem;
    margin: 0 0 2rem 3rem;
    font-size: 2.75rem;
    position: absolute;
    z-index: 5;
    display: block;
    font-weight: bold;
    font-family: sans-serif;
    top: 50%;
`;
