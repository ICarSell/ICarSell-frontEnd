import styled from "styled-components";

export const StyledListComments = styled.div<{ color?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 425px;

  background: var(--color-grey8);

  .listComments {
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    gap: 10px;

    width: 51%;
    height: 100%;

    background: rgb(253, 253, 253);
    margin-left: 6%;
    margin-bottom: 20px;
    font-family: var(--font-family-inter);
    @media (max-width: 1024px) {
      margin-left: 6%;
      width: 52%;
    }

    @media (max-width: 426px) {
      margin-left: 10%;
      width: 80%;
    }
    @media (max-width: 1008px) {
      margin-left: 10%;
      width: 80%;
    }
    h1 {
      padding-top: 25px;
      padding-left: 25px;
      padding-bottom: 12px;
      font-size: var(--text-heading5);
    }
    .comments {
      padding: 25px 0;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 50px;
      .emptyComments {
        padding-left: 25px;
        color: var(--color-brand1);
        font-size: var(--text-heading6);
      }
      li {
        padding-left: 25px;
        .userOpt {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-right: 15px;
          .userInfo {
            display: flex;
            gap: 15px;
            align-items: center;
            .user {
              display: flex;
              align-items: center;
              gap: 15px;
              @media (max-width: 426px) {
                flex-direction: column;
                align-items: start;
                gap: 0px;
              }
            }
            .imgUser {
              display: flex;
              justify-content: center;
              align-items: center;

              width: 30px;
              height: 30px;

              color: white;

              border-radius: 50%;

              background: #4529e6;

              font-weight: 500;
              font-size: 18px;
            }
            h2 {
              font-size: var(--text-body1);
              font-weight: var(--text-weight500);
            }
            .point {
              width: 5px;
              height: 5px;
              border-radius: 100%;
              background-color: var(--color-grey4);

              @media (max-width: 426px) {
                display: none;
              }
            }
            .time {
              color: var(--color-grey4);
            }
          }
          .editComment {
            display: flex;
            align-items: center;
            gap: 8px;
            .editIcon {
              width: 25px;
              height: 25px;
              color: ${({ color }) => color};
              cursor: pointer;
            }
            .trashIcon {
              width: 25px;
              height: 25px;
              color: var(--color-alert1);
              cursor: pointer;
            }
          }
        }
        .comment {
          padding: 18px 55px 18px 4px;
        }
      }
    }
  }
`;
