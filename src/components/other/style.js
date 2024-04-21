import styled from "styled-components";

export const ItemReviewsContainer = styled.div`
    /* display: flex; */
    /* flex-direction: column; */
    width: 200%;
    /* align-items: ; */
    margin-left: -17px;
`

export const ItemReviewHeader = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ItemReviewHeaderLeft = styled.div`
    display: flex;
    gap: 20px;
`  

export const ItemReviewHeaderRight = styled.div`
    display: flex;
    align-items: center;
`  

export const ItemReviewHeaderInput = styled.input`
    height: 30px;
    border-radius: 5px 0 0 5px;
    border: 1px solid gray;
    color: blue;
    padding-left: 10px;
    width: 130px;
    border-right: none;
    &:focus {
        outline: none;
    }
`

export const ItemReviewHeaderButton = styled.button`
    background: none;
    border: 1px solid gray;
    height: 30px;
    width: 30px;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
`

export const ItemReviewDataWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const ItemReviewData = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid gray;
`

export const ItemReviewDataLeft = styled.div`
    display: flex;
    gap: 20px;
`

export const ItemReviewDataRight = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

// faq
export const FaqBox = styled.div`
    width: 38vw;
    height: 60px;
    border-radius: 10px;
    box-shadow: 5px 10px 10px -10px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`