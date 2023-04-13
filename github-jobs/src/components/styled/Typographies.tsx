import { Typography } from "@mui/material"
import { OverridableStringUnion } from "@mui/types"
import { Variant } from "@mui/material/styles/createTypography"
import { TypographyPropsVariantOverrides } from "@mui/material"
import { SxProps } from "@mui/material"
import { Theme } from "@mui/material"
import React from "react"



type TruncatedTypography = {
    variant?: OverridableStringUnion<Variant | "inherit", TypographyPropsVariantOverrides> | undefined
    text: string
    sx?: SxProps<Theme> | undefined
    color?: string
    maxWidth: string
}

const defaultProps: TruncatedTypography = {
    variant: "inherit",
    text: "Truncated Typography",
    sx: {},
    color: "primary",
    maxWidth: "300px"
}

export const TruncatedTypography: React.FC<TruncatedTypography> = (props) => {
    const {variant, text, sx, color, maxWidth} = props

    return (
      <Typography color={color} variant={variant} noWrap overflow="hidden" textOverflow="ellipsis" sx={{maxWidth: maxWidth, ...sx}}>
        {text}
      </Typography>
    )
  }