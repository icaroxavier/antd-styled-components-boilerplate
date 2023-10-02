'use client'

import { Button, Space, Typography } from 'antd'
import { CustomInput, Main } from './page.styles'
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()
  return (
    <Main>
      <Space>
        <Button
          type="primary"
          onClick={() =>
            router.push(
              'https://github.com/icaroxavier/antd-styled-components-boilerplate',
            )
          }
        >
          Boilerplate
        </Button>
        <Button onClick={() => router.push('https://ant.design/')}>antd</Button>
        <Button onClick={() => router.push('https://styled-components.com/')}>
          styled-components
        </Button>
      </Space>
      <Typography>Boilerplate with antd & styled-components</Typography>
      <CustomInput placeholder="Type anything here..." />
    </Main>
  )
}
