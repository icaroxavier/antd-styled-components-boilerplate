import { Input } from 'antd'
import styled from 'styled-components'

export const Main = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`

export const CustomInput = styled(Input)`
  max-width: 200px;
`
