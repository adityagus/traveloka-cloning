"use client"

import { useState } from 'react'
// import { useSession } from 'react'
// import { useRouter } from 'next/navigation';

import Form from "@components/presentational/Form";

const CreatPrompt = () => {
  const [submitting,  setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: '',
    tag: '',
  });

  const createPrompt = async (e) => {

  }
  
  return <Form 
    type="Create"
    post={post}
    setPost={setPost}
    submitting={submitting}
    handleSubmit={createPrompt}
  />
}

export default CreatPrompt;