import { css } from "lit-element";

export const styles = css`
    
    * {
        padding: 0;
        margin: 0;
        background-color: #f7f7f7;
    }

    .nav {
        padding: 25px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        font-family: 'Bebas Neue', cursive;
        border-bottom: 4px solid #55D6BE;
    }
        .title {
            font-size: 40px;
            text-align: center;
            color: #FC6471;
        }

        .listNav {
            background-color: white;
            display: flex;
            list-style-type: none;
            font-size: 20px;
        }

        .elementList {
            padding: 10px;
            color: #FC6471;
        }

    .input {
        border: 3px solid #55D6BE;
        padding: 3px;
        border-radius: 10px;
        margin-top: 10px;
    }
        .search {
            font-family: 'Bebas Neue', cursive;
            color: white;
            background-color: #55D6BE;
            border: none;
            border-radius: 5px;
            padding: 5px;
            margin-left: 5px;
        }
    
    .footer {
        font-family: 'Bebas Neue', cursive;
        color: #FC6471;
        display: flex;
        justify-content: center;
        font-size: 14px;
    }
`;