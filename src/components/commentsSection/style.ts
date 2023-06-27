import styled from "styled-components";

export const StyledListComments = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 425px;

  background: var(--color-grey8);

  .listComments {
    display: flex;
    flex-direction: column;

    gap: 10px;

    width: 51%;
    height: 100%;

    background: rgb(253, 253, 253);
    margin-left: 6%;
    margin-bottom: 20px;
    font-family: var(--font-family-inter);
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

      li {
        padding-left: 25px;
        .userOpt {
          display: flex;
          justify-content: space-between;
          padding-right: 15px;
          .userInfo {
            display: flex;
            gap: 15px;
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
              padding-top: 5px;
              font-weight: var(--text-weight500);
            }
            .point {
              width: 5px;
              height: 5px;
              border-radius: 100%;
              margin-top: 12px;
              background-color: var(--color-grey4);
            }
            .time {
              padding-top: 5px;
              color: var(--color-grey4);
            }
          }
          .editComment {
            button {
              height: 32px;
            }
          }
        }
        .comment {
          padding: 18px 55px;
        }
      }
    }
  }
`;
