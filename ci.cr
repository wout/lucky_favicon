notice "Running test suite..."
run_command "crystal", "spec"

notice "Running crystal formatter..."
run_command "crystal", "tool", "format"

notice "Running ameba..."
run_command "bin/ameba", "--fix"

puts "✔ Done"

def notice(message : String) : Nil
  puts "\n▸ #{message}"
end

def run_command(command : String, *args) : Nil
  Process.run(command, args, output: STDOUT, error: STDERR, input: STDIN)
end
