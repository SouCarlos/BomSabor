import styled from 'styled-components'

export const Container = styled.section` 
    >input{
        background-color: transparent;
    }
    >h3{
        margin: .5rem 0;
    }
    width: 100%;
    
`
export const FoodList = styled.ul`
    >li{
        font-size: 1.1rem;
        display:grid;
        grid-template-columns: 25% 60% 15%;
        grid-template-rows: 20% 80%;
        justify-content:end;
        row-gap: .5rem;
        padding-bottom: 1rem;
        
    
        >img{
            width: 5rem;
            grid-row: span 2;
            height: 5rem;
            border-radius: 1.5rem;
            object-fit: cover;
            

            
        }
        >.value{
            justify-self:end;
        
        }
        >.title , .description{
            padding-left: .3rem
        }
        >.description{
            font-size: .75rem;
            grid-column-start: 2;
            
        }
    }


`