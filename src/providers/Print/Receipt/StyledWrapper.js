import styled from 'styled-components';

const Wrapper = styled.div`
  @media print {
    font-family: Inter, Arial, Helvetica, sans-serif;
    font-size: 2.1rem;

    .title {
      font-size: 2.5rem;
      font-weight: 600;
      margin-bottom: 2rem;
      text-align: center;
    }

    .address {
      font-size: 2rem;
      text-align: center;

      .street {
        margin-bottom: 1rem;
      }

      .phone-number {

      }
    }

    .customer-details {
      margin-top: 2rem;
      margin-bottom: 1rem;
    }

    .return-label {
      font-size: 2rem;
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }

    .total-amount {
      font-weight: 500;
      font-size: 2.5rem;
      margin-top: 1rem;
      border-top: double 4px black;
      text-align: right;
      padding-top: 0.5rem;
      padding-right: 2rem;
    }

    .upi {
      padding-right: 2rem;
      text-align: right;
    }
  }

  table.milk-grid {
    width: 100%;
    border-top: solid 1px silver;
    border-left: solid 1px silver;

    @media print{
      border-top: solid 1px black;
      border-left: solid 1px black;
      margin-bottom: 1rem;
    }

    tr {
      border-bottom: solid 1px silver;
      @media print{
        border-bottom: solid 1px black;
      }

      td {
        width: 16.66%;
        text-align: center;

        border-right: solid 1px silver;
        @media print{
          border-right: solid 1px black;
        }

        &.date {
          padding-left: 0.5rem;
        }
      }
    }
  }

  div.total-grid-container {
    display: flex;
    justify-content: flex-end;

    @media print{
      padding-right: 2rem;
    }
  }


  table.total-grid {
    margin-top: 1rem;
    text-align: right;

    @media print{
      margin-bottom: 1rem;
    }

    tr {
      td {
        text-align: right;

        &:nth-child(1) {
          text-align: left;
        }
        padding-left: 0.5rem;
        padding-right: 0.5rem;
      }
    }
  }

  .payment-receipt {
    border-top: dashed 1px black;

    @media print {
      margin-top: 4rem;
      border-top: dashed 4px black;
    }
  }
`;

export default Wrapper;
