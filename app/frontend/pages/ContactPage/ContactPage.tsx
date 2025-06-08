import { Head } from '@inertiajs/react'
import cs from './ContactPage.module.css'



export default function ContactPage({ name }: { name: string }) {
  return (
    <>
      <Head title='SCUBAbooker | ContactPage'></Head>
      <div className={cs.root}>
        <h1 className={cs.h1}>Hello {name}!</h1>
      </div>
    </>
  )
}