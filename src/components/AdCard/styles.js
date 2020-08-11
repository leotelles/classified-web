import styled from 'styled-components';

export const AdStyle = styled.div`
  margin: 10px;
  padding: 10px;
  width: 201px;
  height: 255px;
  background: #f1f1f1;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);

  -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 2s; /* Firefox < 16 */
  -ms-animation: fadein 2s; /* Internet Explorer */
  -o-animation: fadein 2s; /* Opera < 12.1 */
  animation: fadein 2s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Internet Explorer */
  @-ms-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Opera < 12.1 */
  @-o-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ImageStyle = styled.img`
  width: 100%;
  height: 133px;
  border-radius: 8px;
`;

export const DescriptionStyle = styled.p`
  width: 100%;
  margin-top: 5px;
  margin-bottom: 10px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: #000000;
`;

export const PriceStyle = styled.p`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 5px;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  text-align: right;
  color: #000000;
`;

export const DivBttonsStyle = styled.div`
  width: 100%;
  display: flex;
`;

export const DetailsStyle = styled.button`
  width: 107px;
  height: 32px;
  background: #0db345;
  border: 0;
  border-radius: 8px;
  font-style: normal;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
`;
