''
data "archive_file" "example" {
  type        = "zip"
  source_dir  = "example"
  output_path = "example.zip"
}
''