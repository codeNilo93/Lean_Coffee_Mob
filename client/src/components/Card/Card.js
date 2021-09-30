import styled from 'styled-components/macro'
// import styled from "styled-components";


const Card = () => {
    return (
        <StyledSection>
        <h2>title</h2>
        <p>author</p>
        </StyledSection>

    )
}
const StyledSection = styled.section`
width: 320px;
padding: 1rem;
border: 1px solid red;
`
export default Card