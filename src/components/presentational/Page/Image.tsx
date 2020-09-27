import React from "react"
import styled, { css } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPaperclip,
  faDownload,
  faEye
} from "@fortawesome/free-solid-svg-icons"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { Loader } from "semantic-ui-react"
import "react-lazy-load-image-component/src/effects/blur.css"

interface ImageProps {
  url: string
  name: string
  downloadable?: boolean
  downloadUrl?: string
  previewable?: boolean
}

const StyledImageFrame = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  flex-shrink: 0;
  box-sizing: border-box;
  height: 300px;
  width: 240px;
  margin: 16px;
  margin-bottom: 32px;
  padding: 12px;
  padding-bottom: 48px;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: rgba(0, 0, 0, 0.22) 4px 4px 0px 0px;
`

const StyledImage = styled(LazyLoadImage)`
  object-fit: cover;
  border: 1px solid #ccc;
`

const StyledClip = styled.div`
  position: absolute;
  top: -24px;
  left: -24px;
  font-size: 48px;
  height: 48px;
  width: 48px;
  color: #ccc;
`

const Clip = () => (
  <StyledClip>
    <FontAwesomeIcon icon={faPaperclip} />
  </StyledClip>
)

const bottomButtonStyles = css`
  position: absolute;
  margin: 0;
  padding: 0;
  height: 24px;
  width: 24px;
  font-size: 24px;
  border: none;
  background-color: transparent;
  color: #ccc;

  &:hover {
    color: #777;
    cursor: pointer;
  }
`

const DownloadButton = styled.button`
  bottom: 6px;
  right: 12px;

  ${bottomButtonStyles}
`

const PreviewLink = styled.a`
  bottom: 6px;
  left: 12px;

  ${bottomButtonStyles}
`

function Image(props: ImageProps) {
  const { url, name, downloadable = false, downloadUrl } = props

  const download = () => {
    if (!downloadUrl) {
      return
    }
    fetch(downloadUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = blobURL
        if (name && name.length) a.download = name
        document.body.appendChild(a)
        a.click()
      })
      .catch((err) => new Error(err))
  }

  return (
    <StyledImageFrame>
      {downloadable && <h4>{name}</h4>}
      <StyledImage
        alt={name}
        height={"100%"}
        width={"100%"}
        effect="blur"
        delayTime={1000}
        src={url}
        placeholder={<Loader active />}
      />
      <Clip />
      {downloadable && downloadUrl && (
        <>
          <DownloadButton onClick={download}>
            <FontAwesomeIcon icon={faDownload} />
          </DownloadButton>
          <PreviewLink href={downloadUrl} target="_blank">
            <FontAwesomeIcon icon={faEye} />
          </PreviewLink>
        </>
      )}
    </StyledImageFrame>
  )
}

export default Image
