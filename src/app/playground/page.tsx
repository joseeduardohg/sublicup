'use client';

import { Button, Input } from '@/components/ui';
import './page.css';

export default function Playground() {
  return (
    <div className='container'>
      <h1>Playground</h1>
      <Button onClick={() => alert('Hello!')}>Click me</Button>
      <div className='input-wrapper'>
        <Input placeholder='Enter your name...' />
      </div>
    </div>
  );
}
