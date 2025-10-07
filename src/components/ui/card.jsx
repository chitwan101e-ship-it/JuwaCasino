import React from 'react'
export function Card({ className='', children }) { return <div className={`rounded-2xl bg-white/5 backdrop-blur border border-white/10 ${className}`}>{children}</div> }
export function CardHeader({ className='', children }) { return <div className={`px-4 py-3 border-b border-white/10 ${className}`}>{children}</div> }
export function CardTitle({ className='', children }) { return <div className={`text-lg font-semibold text-white ${className}`}>{children}</div> }
export function CardContent({ className='', children }) { return <div className={`text-white ${className}`}>{children}</div> }