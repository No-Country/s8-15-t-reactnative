import styled from "styled-components/native";

export const MainContainer = styled.View`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 16px;
`
export const StepContainer = styled.View`
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
  position: relative;
  :before {
    content: '';
    position: absolute;
    background: #f3e7f3;
    height: 4px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }
  :after {
    content: '';
    position: absolute;
    background: #4a154b;
    height: 4px;
    width: ${({ width }) => width};
    top: 50%;
    transition: 0.4s ease;
    transform: translateY(-50%);
    left: 0;
  }
`
export const StepWrapper = styled.View`
  position: relative;
  z-index: 1;
`
export const StepStyle = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffffff;
  border: 3px solid ${({ step }) =>
      step === 'completed' ? '#4A154B' : '#F3E7F3'};
  transition: 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const StepCount = styled.Text`
  font-size: 19px;
  color: #f3e7f3;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`
export const StepsLabelContainer = styled.View`
  position: absolute;
  top: 66px;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const StepLabel = styled.Text`
  font-size: 19px;
  color: #4a154b;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`
export const ButtonsContainer = styled.View`
  display: flex;
  justify-content: space-between;
  margin: 0 -15px;
  margin-top: 100px;
`
export const ButtonStyle = styled.Button`
  border-radius: 4px;
  border: 0;
  background: #4a154b;
  color: #ffffff;
  cursor: pointer;
  padding: 8px;
  width: 90px;
  :active {
    transform: scale(0.98);
  }
  :disabled {
    background: #f3e7f3;
    color: #000000;
    cursor: not-allowed;
  }
`
export const CheckMark = styled.View`
  font-size: 26px;
  font-weight: 600;
  color: #4a154b;
  -ms-transform: scaleX(-1) rotate(-46deg); /* IE 9 */
  -webkit-transform: scaleX(-1) rotate(-46deg); /* Chrome, Safari, Opera */
  transform: scaleX(-1) rotate(-46deg);
`