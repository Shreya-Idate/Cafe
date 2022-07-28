import styled from 'styled-components';


export const Heading = styled.p`
    color: #5C4033;
    font-size: 24px;
    margin: 4px;
    font-weight: bold;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,
                            minmax(185px, 1fr));
    grid-gap: 20px;

    @media (max-width: 320px) {
        grid-template-columns: repeat(auto-fill,
                            minmax(200px, 1fr));

    @media (min-width:320px) and (max-width:479px)  { /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
  .footer-content {
    margin-left: auto;
    margin-right: auto;
    max-width: 1230px;
    padding: 40px 15px 1050px;
    position: relative;
  }
}
@media (min-width:480px) and (max-width:599px)  { /* smartphones, Android phones, landscape iPhone */
  .footer-content {
    margin-left: auto;
    margin-right: auto;
    max-width: 1230px;
    padding: 40px 15px 1050px;
    position: relative;
  }
}
@media (min-width:600px) and (max-width: 800px)  { /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */
  .footer-content {
    margin-left: auto;
    margin-right: auto;
    max-width: 1230px;
    padding: 40px 15px 1050px;
    position: relative;
  }
}
@media (min-width:801px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */

}
@media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */

}
@media (min-width:1281px) { /* hi-res laptops and desktops */

}




@media (min-width: 760px) {
  .footer-content {
      margin-left: auto;
      margin-right: auto;
      max-width: 1230px;
      padding: 40px 15px 450px;
      position: relative;
  }

  .footer-wave-svg {
      height: 50px;
  }

  .footer-content-column {
      width: 24.99%;
  }
}
@media (min-width: 568px) {
  /* .footer-content-column {
      width: 49.99%;
  } */
}
}
`;

export const FooterLink = styled.a`
    color: #5C4033;
    font-size: 18px;
    text-decoration: none;
    margin-top: 10%;
    padding-top: 40px;
    padding: 10px;
    word-wrap: break-word;

    &:hover {
        color: #f3b79c;
        transition: 200ms ease-in;
    }
`;

