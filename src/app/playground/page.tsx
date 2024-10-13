'use client';

import { Button, Input } from '@/components/ui';
import { Circle } from 'lucide-react';
import './page.css';

export default function Playground() {
  return (
    <div className='container'>
      <h1>Playground</h1>

      <Button icon={Circle} onClick={() => alert('Hello!')}>
        Click me
      </Button>

      <div className='input-wrapper'>
        <Input placeholder='Enter your name...' />
      </div>
    </div>
  );
}
