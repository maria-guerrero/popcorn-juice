import { css } from "lit-element";

export const styles = css`
    
    * {
        padding: 0;
        margin: 0;
        background-color: #f7f7f7;
    }

    .container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: column;
    }

    .main {
        height: 100%;
        flex-grow: 1;
        overflow: auto;
    }
`;